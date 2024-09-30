import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { plainToClass } from 'class-transformer';
import { Patient } from '../../entity/Patient';

export const validateAddPatient = (req: Request, res: Response, next: NextFunction) => {
  const patient = plainToClass(Patient, req.body);
  
  validate(patient).then((errors: ValidationError[]) => {
    if (errors.length > 0) {
      const errorMessages = errors.map(error => Object.values(error.constraints || {}).join(', ')).join('; ');
      return res.status(400).json({ error: errorMessages });
    }
    next();
  });
};
