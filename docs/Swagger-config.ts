import swaggerAutogen from 'swagger-autogen';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Workouts API',
    version: '1.0.0',
    description: 'Workouts API aims to manage workouts sessions data.',
  },
};

const outputFile = './docs/swagger_output.json';
const endpointsFiles = ['./src/app.ts'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, swaggerDefinition);