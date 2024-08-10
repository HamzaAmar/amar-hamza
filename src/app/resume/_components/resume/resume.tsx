import { Avatar, Flex, Grid, Heading, Text } from '@components/core';
import {
  Arabic,
  Call,
  Css,
  English,
  French,
  Gatsby,
  Globe,
  Html,
  Level,
  Linkdin,
  NextIcon,
  Node,
  Pen,
  ReactIcon,
  TypeScript,
} from '@components/icons';

import Project from '../../../_components/project';
import { BOOKS, EDUCATION_DATA } from './resume.data';

import type { AsideItemProps } from './resume.type';

const AsideItem = ({ icon, title, children }: AsideItemProps) => {
  return (
    <Flex as="li" justify="between">
      <Flex gap="xs" items="center">
        <div className="u_center">{icon}</div>
        <Text size="sm" contrast="low" color="b">
          {title}
        </Text>
      </Flex>
      {children && <div>{children}</div>}
    </Flex>
  );
};

const Education = () => {
  return (
    <section className="r-e section l_f_md">
      <Heading as="h2">Experience</Heading>

      {EDUCATION_DATA.map(({ id, date, title, description }) => (
        <Flex key={id} gap="md" className="re-e">
          <div className="l_f_xs">
            <div>
              <Heading
                color="p"
                contrast="low"
                weight="medium"
                as="h3"
                size="sm"
              >
                {title}
              </Heading>
              <Text
                size="xs"
                className="r-e-d u_flex-none"
                color="b"
                contrast="low"
              >
                {date}
              </Text>
            </div>
            <Text size="sm">{description}</Text>
          </div>
        </Flex>
      ))}
    </section>
  );
};

const resume = () => {
  return (
    <Grid columns="260px 1fr" className="r-e sm_grid-one">
      <aside className="r-e-asd">
        <div className="l_f_md">
          <div className="l_f_md">
            <Heading>Contact</Heading>
            <ul className="r-e-lst l_f_sm">
              <AsideItem
                icon={<Pen width={16} />}
                title="Morocco Marrakech"
              />
              <AsideItem
                icon={<Call width={16} />}
                title="+212 6 3037 1320"
              />
              <AsideItem
                icon={<Linkdin width={16} />}
                title="hamza-miloud-amar-463b24167"
              />
              <AsideItem
                icon={<Globe width={16} />}
                title="https://miloudamar.com/"
              />
            </ul>
          </div>

          <div className="r-e-lst l_f_sm">
            <Heading>Skills</Heading>
            <ul className="l_f_md">
              <AsideItem icon={<Css width={16} />} title="Css">
                <Level level={4} width="36" />
              </AsideItem>
              <AsideItem
                icon={<ReactIcon width={16} />}
                title="React js"
              >
                <Level level={4} width="36" />
              </AsideItem>
              <AsideItem
                icon={<NextIcon width={16} />}
                title="Next js"
              >
                <Level level={4} width="36" />
              </AsideItem>

              <AsideItem icon={<Html width={16} />} title="HTML">
                <Level level={4} width="36" />
              </AsideItem>
              <AsideItem
                icon={<TypeScript width={16} />}
                title="TypeScript"
              >
                <Level level={4} width="36" />
              </AsideItem>
              <AsideItem
                icon={<Node width={16} />}
                title="Javascript"
              >
                <Level level={4} width="36" />
              </AsideItem>
              <AsideItem icon={<Html width={16} />} title="Remix">
                <Level level={4} width="36" />
              </AsideItem>
              <AsideItem icon={<Gatsby width={16} />} title="Gatsby">
                <Level level={2} width="36" />
              </AsideItem>
              <AsideItem icon={<Node width={16} />} title="NodeJS">
                <Level level={2} width="36" />
              </AsideItem>
            </ul>
          </div>

          <div className="l_f_md">
            <Heading>Language</Heading>
            <ul className="r-e-lst l_f_sm">
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
          <div className="l_f_md">
            <Heading>Books I love</Heading>
            <ul className="r-e-lst l_f_sm">
              {BOOKS.map(({ key, title }) => (
                <Text
                  size="xs"
                  contrast="low"
                  color="b"
                  as="li"
                  key={key}
                >
                  {title}
                </Text>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <div>
        <Flex gap="lg" className="r-e-hdr">
          <div>
            <Avatar
              image="/me.jpg"
              size="lg"
              title="Hamza miloud amar"
            />
          </div>
          <div className="l_f_2xs">
            <div>
              <Heading weight="medium" align="start" size="sm">
                Hamza Miloud Amar
              </Heading>
              <Text weight="thin" align="start" size="sm" as="h2">
                Front End Developer
              </Text>
            </div>
            <Text color="b" contrast="low">
              Experienced Frontend Developer | Passionate about
              building elegant, accessible, and UX-friendly Design
              Systems with React | Skilled in React Next Remix | CSS
              enthusiast | Lover of Clean & Maintainable CSS | Always
              learning and growing.
            </Text>
          </div>
        </Flex>

        <div>
          <Education />
          <Project className="md_grid-one" />
        </div>
      </div>
    </Grid>
  );
};

export default resume;
