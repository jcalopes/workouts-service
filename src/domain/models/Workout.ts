import { ObjectId } from 'mongodb';

export interface Workout {
  _id: ObjectId;
  name?: string;
  description: string;
  category: string;
  date: Date;
}
