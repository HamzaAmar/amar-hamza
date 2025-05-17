import React from "react";

import { Text } from "@components/core";

const NotFoundPage = () => {
  return (
    <div className="n-f Fc">
      <div className="n-f-cnt Sf-5">
        <Text type="heading" as="h1" size="3xl">404 Page Not Found </Text>
        <p className="Fs-7 Fw-2 Cb ty-low">
          We Think that You get Lost and we think that you need help please
          check our map to go fast for the page that you need
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
