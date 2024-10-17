import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Workouts Service API',
      version: '1.0.0',
      description: 'API documentation for Workout Service',
      contact: {
        name: 'João Lopes',
        email: 'lopes.joao.ca@gmail.com',
      },
    },
  },
  apis: ['./src/routes/**/*.ts'], // Path to the API routes
};

export const swaggerSpec = swaggerJSDoc(options);
