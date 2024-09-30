import { Request, Response } from 'express';
import { wss } from '../app';
import { AppDataSource } from '../database';

export const handleGetSettings = async (req: Request, res: Response) => {

  const patientRepo = AppDataSource.getRepository(Patient);
  const patientInfo = patientRepo.create(req.body as Patient);

  const settingsRepo = AppDataSource.getRepository(Settings);
  const settings = await settingsRepo.find();

  res.status(200).json(settings);
}