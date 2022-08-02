import { Avatar, Heading, Text } from '@components/core';
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
  Linkdin,
  NextIcon,
  Node,
  Pen,
  ReactIcon,
  Twitter,
  TypeScript,
} from '@components/icons';
import { PROJECTS } from '@constants/project';

import { Project } from '..';

import type { AsideProps, AsideItemProps } from './resume.type';

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
        <div className="resume--aside-header">
          <Avatar
            image="/me.jpg"
            size="xl"
            title="Hamza miloud amar"
          />
        </div>
        <div className="resume--header-info l_flow">
          <Heading align="start" size="lg">
            Hamza <span className="highlight"> Miloud Amar</span>
          </Heading>
          <Heading align="start" size="md" as="h2">
            Front End Developer
          </Heading>
          <Text>
            Hello my name is Hamza Miloud Amar I am a Front End Web
            Developer I am Fall in love With React and Css and I am
            happy and I am Passion to work with anything about
            Animation (CSS , Gsap , Threejs) and Css
          </Text>
        </div>
      </header>

      <main className="resume--main">
        <Project />;
      </main>
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
                title="hello wold"
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
        </div>
      </aside>
    </section>
  );
};

export default resume;
