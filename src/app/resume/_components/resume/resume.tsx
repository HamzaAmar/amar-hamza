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
      <Flex gap="3" items="center">
        <div className="Fc">{icon}</div>
        <Text size="4" low color="b">
          {title}
        </Text>
      </Flex>
      {children && <div>{children}</div>}
    </Flex>
  );
};

const Education = () => {
  return (
    <section className="re- section Sf-5">
      <Heading as="h2">Experience</Heading>

      {EDUCATION_DATA.map(({ id, date, title, lists }) => (
        <Flex key={id} gap="5" className="re-E">
          <div className="Sf-3">
            <div>
              <Heading color="p" low weight="5" as="h3" size="4">
                {title}
              </Heading>
              <Text
                size="3"
                className="re-D u_flex-none"
                color="b"
                low
              >
                {date}
              </Text>
              <ul className="Sf-3">
                {lists.map((item, index) => (
                  <Text as="li" size="4" key={index}>
                    {item}
                  </Text>
                ))}
              </ul>
            </div>
          </div>
        </Flex>
      ))}
    </section>
  );
};

const resume = () => {
  return (
    <Grid columns="1fr 260px" className="re- sm_grid-one">
      <div>
        <div className="re-H Sf-4">
          <Flex gap="4" items="center">
            <div>
              <Avatar
                image="/me.jpg"
                size="5"
                title="Hamza miloud amar"
              />
            </div>
            <div>
              <Heading weight="5" align="start" size="6">
                Hamza Miloud Amar
              </Heading>
              <Text
                color="b"
                low
                weight="1"
                align="start"
                size="4"
                as="h2"
              >
                Front End Developer
              </Text>
            </div>
          </Flex>
          <Text color="b" low>
            Senior frontend developer with nearly a decade of
            experience using React, TypeScript, Next.js, and Remix to
            build complex, scalable user interfaces. Combines
            expert-level CSS skills and a strong focus on web
            performance and accessibility. Excels at architecting
            robust design systems and transforming technical
          </Text>
        </div>

        <div>
          <Education />
          <Project className="md_grid-one" />
        </div>
      </div>
      <aside className="re-A">
        <div className="Sf-5">
          <div className="Sf-5">
            <Heading>Contact</Heading>
            <ul className="re-L Sf-4">
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

          <div className="re-L Sf-4">
            <Heading>Skills</Heading>
            <ul className="Sf-5">
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

          <div className="Sf-5">
            <Heading>Language</Heading>
            <ul className="re-L Sf-4">
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
          <div className="Sf-5">
            <Heading>Books I love</Heading>
            <ul className="re-L Sf-4">
              {BOOKS.map(({ key, title }) => (
                <Text size="3" low color="b" as="li" key={key}>
                  {title}
                </Text>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </Grid>
  );
};

export default resume;
