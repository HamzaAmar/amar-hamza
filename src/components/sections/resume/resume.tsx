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

import Project from '../project';
import { EDUCATION_DATA } from './resume.data';

import type { AsideProps, AsideItemProps } from './resume.type';

const AsideItem = ({ icon, title, children }: AsideItemProps) => {
  return (
    <Flex as="li" justify="between" className="resume--item">
      <Flex gap="xs" className="resume--item-info">
        <div className="u_bothCenter u_center">{icon}</div>
        <div>{title}</div>
      </Flex>
      {children && <div>{children}</div>}
    </Flex>
  );
};

const Education = () => {
  return (
    <section className="section l_flow__md">
      <Heading as="h2">Experience</Heading>

      {EDUCATION_DATA.map(({ id, date, title, description }) => (
        <Flex key={id} gap="md" className="education--article">
          <div className="l_flow__xs">
            <div>
              <Heading
                color="primary"
                contrast="low"
                weight="medium"
                as="h3"
                size="sm"
              >
                {title}
              </Heading>
              <Text
                size="xs"
                className="education--date u_flex-none"
                color="slate"
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
    <Grid columns="260px 1fr" className="resume sm_grid-one">
      <aside className="resume--aside">
        <div className="resume--info-aside l_flow">
          <div className="resume-aside--item l_flow">
            <Heading>Contact</Heading>
            <ul className="resume--list l_flow">
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

          <div className="resume-aside--item l_flow">
            <Heading>Skills</Heading>
            <ul className="resume--list l_flow">
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

          <div className="resume-aside--item l_flow">
            <Heading>Language</Heading>
            <ul className="resume--list l_flow">
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
          <div className="l_flow">
            <Heading>Books I love</Heading>
            <ul className="l_flow">
              <Flex as="li">
                <span>CSS Secrets (By Lea Varou)</span>
              </Flex>
              <Flex as="li">Form Design Pattern</Flex>
              <Flex as="li">Every Layout</Flex>
              <Flex as="li">Inclusive Components</Flex>
              <Flex as="li">Inclusive Design Pattern</Flex>
              <Flex as="li">
                Designing with Progressive Enhancement
              </Flex>
              <Flex as="li">
                J. David Eisenberg, Amelia Bellamy-Royds - SVG
                Essentials
              </Flex>
              <Flex as="li">Debugging css By Ahmad Shadeed</Flex>
              <Flex as="li">
                Estelle Weyl - Transitions and Animations in CSS
              </Flex>
            </ul>
          </div>
        </div>
      </aside>
      <div>
        <Flex gap="lg" className="resume--header">
          <div className="resume--aside-header">
            <Avatar
              image="/me.jpg"
              size="3xl"
              title="Hamza miloud amar"
            />
          </div>
          <div className="resume--header-info l_flow__2xs">
            <div>
              <Heading weight="medium" align="start" size="sm">
                Hamza Miloud Amar
              </Heading>
              <Text weight="thin" align="start" size="sm" as="h2">
                Front End Developer
              </Text>
            </div>
            <Text color="slate" contrast="low">
              Experienced Frontend Developer | Passionate about
              building elegant, accessible, and UX-friendly Design
              Systems with React | Skilled in React Next Remix | CSS
              enthusiast | Lover of Clean & Maintainable CSS | Always
              learning and growing.
            </Text>
          </div>
        </Flex>

        <div className="resume--main">
          <Education />
          <Project className="md_grid-one" />
        </div>
      </div>
    </Grid>
  );
};

export default resume;
