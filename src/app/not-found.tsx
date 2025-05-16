import React from "react";

import { Heading, Text } from "@components/core";

const NotFoundPage = () => {
  return (
    <div className="n-f Fc">
      <div className="n-f-cnt Sf-5">
        <Heading size="3xl">404 Page Not Found </Heading>
        <Text size="7" weight="2" color="b" low>
          We Think that You get Lost and we think that you need help please
          check our map to go fast for the page that you need
        </Text>
      </div>
    </div>
  );
};

export default NotFoundPage;
