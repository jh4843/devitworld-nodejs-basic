import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Study } from '../../entity/Study';

export const validateAddStudy = async (req: Request, res: Response, next: NextFunction) => {
  const study = plainToClass(Study, req.body);
  const errors = await validate(study);

  if (errors.length > 0) {
    const errorMessages = errors.map(error => Object.values(error.constraints || {}).join(', ')).join('; ');
    return res.status(400).json({ error: errorMessages });
  }

  next();
};