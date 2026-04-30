import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Film Bioskop API",
      version: "1.0.0",
      description: "Dokumentasi API untuk manajemen film bioskop",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./app.js"], // scan komentar di app.js
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };