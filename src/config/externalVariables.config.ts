// Mapper for environment variables

export const port = process.env.PORT || 3000;
export const environment = process.env.NODE_ENV || 'development';
export const logDirectory = process.env.LOG_DIR;

export const dbConnString =
  process.env.DB_CONN_STRING || 'mongodb://localhost:27017/your_db_name';
export const dbName = process.env.DB_NAME;
export const workoutsCollection = process.env.WORKOUT_COLLECTION_NAME || 'workouts';
