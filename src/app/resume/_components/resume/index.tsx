import { Avatar, Flex, Grid, Text } from "@components/core";
import { Level } from "@components/icons";

import type { AsideItemProps } from "./resume.type";

import Project from "../../../_components/project";
import { BOOKS, CONTACTS, EDUCATIONS, LANGUAGES, SKILLS } from "./resume.data";

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
      <Text type="heading" as="h2">Experience</Text>

      {EDUCATIONS.map(({ id, date, title, lists }) => (
        <Flex key={id} gap="5" className="re-E">
          <div className="Sf-3">
            <div>
              <Text type="heading" color="p" low weight="5" as="h3" size="4">
                {title}
              </Text>
              <Text
                size="3"
                className="re-D u_flex-none"
                color="b"
                low
              >
                {date}
              </Text>
              <ul className="Sf-3">
                {lists.map(item => (
                  <Text as="li" size="4" key={item}>
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

const Resume = () => {
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
              <Text type="heading" as="h1" weight="5" align="start" size="6">
                Hamza Miloud Amar
              </Text>
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
            <Text type="heading" as="h2">Contact</Text>
            <ul className="re-L Sf-4">
              {CONTACTS.map(({ icon, title }) => (
                <AsideItem icon={icon} title={title} key={title} />
              ))}
            </ul>
          </div>

          <div className="re-L Sf-4">
            <Text type="heading" as="h2">Skills</Text>
            <ul className="Sf-5">
              {SKILLS.map(({ icon, title, level }) => (
                <AsideItem icon={icon} title={title} key={title}>
                  <Level level={level} width="36" />
                </AsideItem>
              ))}
            </ul>
          </div>

          <div className="Sf-5">
            <Text type="heading" as="h2">Language</Text>
            <ul className="re-L Sf-4">
              {LANGUAGES.map(({ icon, title, level }) => (
                <AsideItem icon={icon} title={title} key={title}>
                  <Level level={level} width="36" />
                </AsideItem>
              ))}
            </ul>
          </div>
          <div className="Sf-5">
            <Text type="heading" as="h2">Books I love</Text>
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

export default Resume;
