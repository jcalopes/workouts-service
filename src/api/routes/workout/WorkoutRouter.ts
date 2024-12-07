import express, { Router } from 'express';
import { WorkoutController } from '../../controllers/WorkoutController';
import { inject, injectable } from 'inversify';
import TYPES from '../../../application/di/types';
import Logger from '../../../utils/Logger';

/**
 * @swagger
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       required:
 *         - description
 *         - category
 *         - date
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: The auto-generated id of the workout
 *         name:
 *           type: string
 *           description: The title of your workout
 *         category:
 *           type: string
 *           description: The workout category.
 *         date:
 *           type: string
 *           format: date
 *           description: The date the workout was added
 *       example:
 *         name: Sunday Morning Workout
 *         category: Leg Day
 *         date: 2024-12-10T04:05:06.157Z
 */
@injectable()
export class WorkoutRouter {
  private readonly router: Router;

  public constructor(
    @inject(TYPES.WorkoutController)
    private workoutController: WorkoutController,
  ) {
    this.router = express.Router();
  }

  public getWorkoutRouter(): Router {
    /**
     * @swagger
     * /api/v1/workouts:
     *   get:
     *     summary: Get a list of workouts.
     *     description: Retrieve a list of workouts from the database.
     *     responses:
     *       200:
     *         description: Successful response with a list of workouts.
     */
    this.router.get('/workouts', async (req, res) => {
      Logger.info('WorkoutRouter:: getWorkouts: init');
      await this.workoutController.getWorkouts(req, res);
    });

    /**
     * @swagger
     * /api/v1/workouts:
     *   post:
     *     summary: Create a new workout.
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/Workout'
     *     description: Store a new workout on the workouts database..
     *     responses:
     *       201:
     *         description: Successful response with a workout id.
     */
    this.router.post('/workouts', async (req, res) => {
      Logger.info('WorkoutRouter:: postWorkout: init');
      await this.workoutController.createWorkout(req, res);
    });

    /**
     * @swagger
     * /api/v1/workouts/{id}:
     *   get:
     *     summary: Get a workout id.
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The workout id
     *     description: Retrieve a specific workout given the provided id.
     *     responses:
     *       200:
     *         description: Successful response with workout id.
     */
    this.router.get('/workouts/:id', async (req, res) => {
      Logger.info('WorkoutRouter:: getWorkoutId: init');
      await this.workoutController.getWorkout(req, res);
    });

    /**
     * @swagger
     * /api/v1/workouts/{id}:
     *   delete:
     *     summary: Delete a workout.
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The workout id
     *     description: Delete a specific workout given the provided id.
     *     responses:
     *       204:
     *         description: Successful response.
     */
    this.router.delete('/workouts/:id', async (req, res) => {
      Logger.info('WorkoutRouter:: deleteWorkoutId: init');
      await this.workoutController.deleteWorkout(req, res);
    });

    return this.router;
  }
}
