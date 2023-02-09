/* eslint-disable no-useless-return */
import fs from 'fs';
import path from 'path';

function debug(message, variant) {
  const color = variant === 'success' ? '\x1b[32m' : '\x1b[31m';
  const symbol = variant === 'success' ? '✓' : '✖';

  console.log(`\n${color} ${symbol} ${message}`);
}

function getFiles(component) {
  const camelName = component[0].toUpperCase() + component.slice(1);

  /*  Typescript File */

  const typeFile = {
    title: `${component}.type.ts`,
    content: `import type { ReactNode } from 'react';

    export interface ${camelName}Props {
      children: ReactNode;
    }`,
  };

  /*  Index File */

  const indexFile = {
    title: 'index.tsx',
    content: `export {default} from "./${component}"`,
  };

  /*  StoryBook File */

  const storyFile = {
    title: `${component}.stories.tsx`,
    content: `import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import ${camelName} from '.';

    export default {
      title: 'COMPONENTS/CORE/${camelName}',
      component: ${camelName},
      args: {
        children: 'Hello world',
      },
    } as ComponentMeta<typeof ${camelName}>;

    const Template: ComponentStory<typeof ${camelName}> = (args) => <${camelName} {...args} />;

    export const Regular${camelName} = Template.bind({});
    `,
  };

  /*  React Component File */

  const componentFile = {
    title: `${component}.tsx`,
    content: `import React from 'react';
  import type { ${camelName}Props } from './${component}.type';

  const ${camelName} = ({ children, ...rest }: ${camelName}Props) => {
    return (
      <div className="${component}" {...rest}>
        {children}
      </div>
    );
  };

  export default ${camelName};`,
  };

  /*  Scss Style File */

  const scssFile = {
    title: `_${component}.scss`,
    content: `.${component}{}`,
  };

  /*  Array  Files */

  const files = [
    typeFile,
    indexFile,
    storyFile,
    componentFile,
    scssFile,
  ];
  return files;
}

function appendToFileIfExist(file, content) {
  const addToFile = fs.existsSync(file)
    ? fs.appendFileSync
    : fs.writeFileSync;
  addToFile(file, content);
}

function makeFiles(directory, component, parent) {
  const files = getFiles(component);

  // TODO MAKE IT GENERAC TO WORK IN EVERY PROJECT
  const arrayDir = directory.split(path.sep);
  const directoryProjectIndex = arrayDir.findIndex(
    (value) => value === 'my-ui-starter',
  );
  const directoryProject = arrayDir
    .slice(directoryProjectIndex + 2)
    .join(path.sep);
  const fullDirectory = path.join('..', '..', '..', directoryProject);

  files.forEach(({ title, content }) => {
    const file = path.join(directory, title);

    fs.writeFileSync(file, content, 'UTF8');
    if (/.scss$/.test(title)) {
      const pathParent = path.join(
        process.cwd(),
        'src',
        'scss',
        'components',
        `_${parent}`,
      );
      const componentPath = path
        .join(fullDirectory, title)
        .split(path.sep)
        .join('/');

      if (!fs.existsSync(pathParent)) {
        fs.mkdirSync(pathParent);
      }
      appendToFileIfExist(
        path.join(pathParent, '_index.scss'),
        `@forward "${componentPath}";`,
      );
    }
  });
}

function makeComponent(parent, component) {
  const UppercaseFirstLetter =
    component[0].toUpperCase() + component.slice(1);

  const directoryParent = path.join(
    process.cwd(),
    'src',
    'components',
    parent,
  );
  const indexParent = path.join(directoryParent, 'index.ts');
  const directory = path.join(directoryParent, component);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
    makeFiles(directory, component, parent);
    appendToFileIfExist(
      indexParent,
      `export {default as ${UppercaseFirstLetter}} from "./${component}";`,
    );

    return;
  }
  debug(
    `directory with the name ${component} already exist please try with another name or
     please look at this path for the component ▼ \n ${directory}`,
    'danger',
  );
}

export const createComponent = () => {
  /* eslint-disable no-unused-vars */
  const [_, __, folder, filename] = process.argv;
  makeComponent(folder, filename);
};
