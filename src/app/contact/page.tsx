import type { Metadata } from "next";

import { Grid, Social, Text } from "@components/core";

import type { ContactItemProps } from "./utils/contact.type";

import Form from "./form";
import { CONTACT_INFO } from "./utils/contact.data";

export const metadata: Metadata = {
  title: "Contact Us", // Replace with your company name
  description:
    "Get in touch with us! We are happy to answer your questions and discuss your needs.",
};

const InfoItem = ({ icon, info, ...rest }: ContactItemProps) => {
  const Tag = rest.href ? "a" : "div";
  return (
    <Tag
      {...rest}
      data-link={!!rest.href}
      className="p-co-info-item u_column"
    >
      {icon}
      <Text>{info}</Text>
    </Tag>
  );
};

const contact = () => {
  return (
    <Grid columns="1fr 1fr" className="sm_grid-one p-co">
      <div className="p-co-info  Sf-5">
        <Text type="heading" as="h1" weight="4" size="3xl">
          Let's Collaborate on Your Next Web Project
        </Text>

        <Text color="b" size="6" low>
          I'm a
          <strong> freelance web developer</strong>
          {" "}
          passionate
          about crafting exceptional digital experiences. If you're
          looking for a
          {" "}
          <strong>skilled developer</strong>
          {" "}
          to bring
          your website or application to life, please complete the
          form below. I'd love to discuss your project and how I can
          help you achieve your goals.
        </Text>

        <div className="p-co-info-list Sf-5">
          {CONTACT_INFO.map(({ id, ...rest }) => (
            <InfoItem key={id} {...rest} />
          ))}
        </div>
        <Social />
      </div>
      <div className="p-co-form">
        <Form />
      </div>
    </Grid>
  );
};

export default contact;
