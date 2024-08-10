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
import { EDUCATION_DATA } from './resume.data';

import type { AsideProps, AsideItemProps } from './resume.type';

const AsideItem = ({ icon, title, children }: AsideItemProps) => {
  return (
    <Flex as="li" justify="between" className="resume--item">
      <Flex gap="xs" items="center" className="resume--item-info">
        <div className="u_center">{icon}</div>
        <Text size="sm" weight="medium">
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
    <Grid columns="260px 1fr" className="resume sm_grid-one">
      <aside className="resume--aside">
        <div className="resume--info-aside l_f_md">
          <div className="resume-aside--item l_f_md">
            <Heading>Contact</Heading>
            <ul className="resume--list l_f_md">
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

          <div className="resume-aside--item l_f_md">
            <Heading>Skills</Heading>
            <ul className="resume--list l_f_md">
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

          <div className="resume-aside--item l_f_md">
            <Heading>Language</Heading>
            <ul className="resume--list l_f_md">
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
            <ul className="l_f_md">
              <Text size="sm" as="li">
                <span>CSS Secrets (By Lea Varou)</span>
              </Text>
              <Text size="sm" as="li">
                Form Design Pattern
              </Text>
              <Text size="sm" as="li">
                Every Layout
              </Text>
              <Text size="sm" as="li">
                Inclusive Components
              </Text>
              <Text size="sm" as="li">
                Inclusive Design Pattern
              </Text>
              <Text size="sm" as="li">
                Designing with Progressive Enhancement
              </Text>
              <Text size="sm" as="li">
                J. David Eisenberg, Amelia Bellamy-Royds - SVG
                Essentials
              </Text>
              <Text size="sm" as="li">
                Debugging css By Ahmad Shadeed
              </Text>
              <Text size="sm" as="li">
                Estelle Weyl - Transitions and Animations in CSS
              </Text>
              <Text size="sm" as="li">
                <span>Software Engineering at Google </span>
                <span>
                  Lessons Learned from Programming Over Time
                </span>
              </Text>
              <Text size="sm" as="li">
                Building large scale web apps
              </Text>
            </ul>
          </div>
        </div>
      </aside>
      <div>
        <Flex gap="lg" className="r-e-hdr">
          <div className="resume--aside-header">
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

        <div className="resume--main">
          <Education />
          <Project className="md_grid-one" />
        </div>
      </div>
    </Grid>
  );
};

export default resume;
