import { Avatar, Heading, Tag, Text } from '@components/core';
import {
  Arabic,
  Call,
  Css,
  English,
  French,
  Gatsby,
  Github,
  Globe,
  Html,
  Level,
  NextIcon,
  Node,
  Pen,
  ReactIcon,
  TypeScript,
} from '@components/icons';
import { PROJECTS } from '@constants/project';

import type { AsideProps, AsideItemProps } from './resume.type';

const MyWork = ({
  img,
  title,
  description,
  links,
  technologies,
}: AsideProps) => {
  return (
    <li className="resume--work">
      <Avatar image={img.src} title={img.alt} />
      <div className="resume--work-detail">
        <Heading>{title}</Heading>
        <div className="resume__projects">
          {links.map((link) => {
            const icon =
              link.title.toLowerCase() === 'site' ? (
                <Globe width="20" />
              ) : (
                <Github width="20" />
              );
            return (
              <a key={link.site} className="" href={link.site}>
                {icon}
                <span>{link.title}</span>
              </a>
            );
          })}
        </div>
        <p>{description}</p>

        <ul className="resume--technologies">
          {technologies.map((technology) => (
            <Tag
              key={technology}
              color="primary"
              title={technology}
              size="sm"
            />
          ))}
        </ul>
      </div>
    </li>
  );
};

const AsideItem = ({ icon, title, children }: AsideItemProps) => {
  return (
    <li className="resume--item">
      <div className="resume--item-info">
        <div className="u_bothCenter u_center">{icon}</div>
        <div>{title}</div>
      </div>
      {children && <div>{children}</div>}
    </li>
  );
};

const resume = () => {
  return (
    <section className="resume">
      <header className="resume--header">
        <Heading>
          Hamza <span className="highlight"> Miloud Amar</span>
        </Heading>
        <Text> Front End Developer </Text>
        <Text>
          Hello my name is Hamza Miloud Amar I am a Front End Web
          Developer I am Fall in love With React and Css and I am
          happy and I am Passion to work with anything about Animation
          (CSS , Gsap , Threejs) and Css
        </Text>
      </header>
      <aside className="resume--aside">
        <div className="resume--info-aside">
          <div className="resume--aside-header">
            <Avatar
              image='src="/myImage.jpg"'
              title="Hamza miloud amar"
            />
          </div>
          <div className="">
            <Heading>Contact</Heading>
            <ul>
              <AsideItem
                icon={<Pen width={16} />}
                title="Morocco Marrakech"
              />
              <AsideItem
                icon={<Call width={16} />}
                title="+212 6 3037 1320"
              />
              <AsideItem
                icon={<Pen width={16} />}
                title="hello wold"
              />
              <AsideItem
                icon={<Globe width={16} />}
                title="https://miloudamar.com/"
              />
            </ul>
          </div>

          <div className="">
            <Heading>Skills</Heading>
            <ul className="resume--list">
              <AsideItem icon={<Css width={16} />} title="Css" />
              <AsideItem
                icon={<ReactIcon width={16} />}
                title="React js"
              />
              <AsideItem
                icon={<NextIcon width={16} />}
                title="Next js"
              />

              <AsideItem icon={<Html width={16} />} title="HTML" />
              <AsideItem
                icon={<TypeScript width={16} />}
                title="TypeScript"
              />
              <AsideItem
                icon={<Node width={16} />}
                title="Javascript"
              />
              <AsideItem icon={<Html width={16} />} title="Remix" />
              <AsideItem
                icon={<Gatsby width={16} />}
                title="Gatsby"
              />
            </ul>
          </div>

          <div className="">
            <Heading>Language</Heading>
            <ul>
              <AsideItem icon={<Arabic width={16} />} title="Arabic">
                <Level level={4} width="36" />
              </AsideItem>
              <AsideItem
                icon={<English width={16} />}
                title="English"
              >
                <Level level={3} width="36" />
              </AsideItem>
              <AsideItem icon={<French width={16} />} title="French">
                <Level level={2} width="36" />
              </AsideItem>
            </ul>
          </div>
        </div>
      </aside>
      <main className="resume--main">
        <h2>My Work</h2>
        <ul className="resume--works">
          {PROJECTS.map(({ id, ...rest }) => {
            return <MyWork key={id} {...rest} />;
          })}
        </ul>
      </main>
    </section>
  );
};

export default resume;
