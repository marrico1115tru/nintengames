'use client'
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import swaggerDocument from "../../lib/swagger.json";

export default function ApiDocs() {
  const originalError = console.error;
  console.error = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("UNSAFE_componentWillReceiveProps")) {
      return; 
    }
    originalError(...args); 
  };

  return <SwaggerUI spec={swaggerDocument} />;
}
