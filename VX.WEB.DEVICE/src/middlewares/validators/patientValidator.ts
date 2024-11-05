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

export const validateGetPatient = (req: Request, res: Response, next: NextFunction) => {
  const { PatientKey } = req.params;

  // 환자 키가 숫자인지, null 또는 undefined가 아닌지 검증
  if (!PatientKey || isNaN(Number(PatientKey))) {
    return res.status(400).json({ error: 'Invalid or missing PatientKey' });
  }

  // 추가로 다른 검증 로직이 필요한 경우 여기에 추가
  next();
};