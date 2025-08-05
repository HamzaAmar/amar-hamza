import { Avatar, Flex, Grid, Tag, Text } from "@components/core";
import { Level } from "@components/icons";

import type { AsideItemProps } from "./resume.type";

import { BOOKS, CONTACTS, Education, EXPERIENCES, Interests, LANGUAGES, SKILLS } from "./resume.data";

const AsideItem = ({ icon, title, children }: AsideItemProps) => {
  return (
    <Flex as="li" justify="between">
      <Flex gap="3" items="center">
        <div className="Fc">{icon}</div>
        <Text size="4" low color="b" style={{ wordBreak: "break-all" }}>
          {title}
        </Text>
      </Flex>
      {children && <div>{children}</div>}
    </Flex>
  );
};

const Experience = () => {
  return (
    <section className="re- section Sf-5">
      <Text type="heading" as="h2">Experience</Text>

      {EXPERIENCES.map(({ id, date, title, lists, skills, tags }) => (
        <Flex key={id} gap="5" className="re-E">
          <div className="Sf-3">
            <div className="Sf-3">
              <div>
                <Flex gap="4" items="center">
                  <Text type="heading" color="p" low weight="5" as="h3" size="4">
                    {title}
                  </Text>
                  <Flex gap="2">
                    {tags?.map(item => (
                      <Tag color="s" title={item} key={item} />
                    ))}
                  </Flex>
                </Flex>
                <Text
                  size="3"
                  color="b"
                  low
                >
                  {date}
                </Text>
              </div>
              <ul className="Sf-3">
                {lists.map(item => (
                  <Text as="li" size="4" key={item}>
                    {item}
                  </Text>
                ))}
              </ul>
            </div>
            <Flex wrap gap="3" items="center">
              {skills.map(item => (
                <Tag title={item} key={item} />
              ))}
            </Flex>
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
                color="p"
                low
                weight="1"
                align="start"
                size="4"
                as="h2"
              >
                Expert React Developer & CSS Enthusiast
              </Text>
            </div>
          </Flex>
          <Text color="b" low>
            Expert Frontend Developer with a decade of experience in building enterprise-scale design systems and accessible web applications. Architecting large-scale projects with Next.js, optimizing web performance, and ensuring WCAG compliance across diverse user needs. Proven leader in scaling frontend architecture and implementing inclusive design practices, resulting in an 80% reduction in production issues while maintaining AA/AAA accessibility standards.
          </Text>
        </div>

        <Experience />
      </div>
      <aside className="re-A">
        <div className="Sf-5">
          <div className="Sf-5">
            <Text type="heading" as="h2">Contact</Text>
            <ul className="re-L Sf-2">
              {CONTACTS.map(({ icon, title }) => (
                <AsideItem icon={icon} title={title} key={title} />
              ))}
            </ul>
          </div>

          <div className="re-L Sf-4">
            <Text type="heading" as="h2">Skills</Text>
            <ul className="Sf-2">
              {SKILLS.map(([title, skills]) => (
                <div key={title}>
                  <Text as="span" weight="6">
                    {title}
                    {": "}
                  </Text>

                  {skills.map((skill, index) => (
                    <Text as="span" color="b" size="3" key={skill}>
                      {skill}
                      {index !== skills.length - 1 && ", "}
                    </Text>
                  ))}
                </div>
              ))}
            </ul>
          </div>

          <div className="Sf-5">
            <Text type="heading" as="h2">Education</Text>
            <div className="re-L">
              <Text size="4" weight="5">
                {Education.title}
              </Text>
              <Text size="3" low color="b">
                {Education.date}
              </Text>
            </div>
          </div>

          <div className="Sf-5">
            <Text type="heading" as="h2">Language</Text>
            <ul className="re-L">
              {LANGUAGES.map(({ icon, title, level }) => (
                <AsideItem icon={icon} title={title} key={title}>
                  <Level level={level} width="36" />
                </AsideItem>
              ))}
            </ul>
          </div>

          <div className="Sf-5">
            <Text type="heading" as="h2">Interests</Text>
            <ul className="re-L Sf-2">
              {Interests.map(title => (
                <Text size="3" low color="b" as="li" key={title}>
                  {title}
                </Text>
              ))}
            </ul>
          </div>
          <div className="Sf-5">
            <Text type="heading" as="h2">Books I love</Text>
            <ul className="re-L Sf-2">
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
