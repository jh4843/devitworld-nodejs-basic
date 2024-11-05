import { Request, Response } from 'express';
import { wss } from '../app';
import { Patient } from '../entity/Patient';
import { broadcast } from '../utils/webSocketUtils';
import { AppDataSource } from '../database';

export const PatientRepository = AppDataSource.getRepository(Patient);

export const handleNewPatient = async (req: Request, res: Response) => {
  const patientInfo = PatientRepository.create(req.body as Patient);

  try {
    await PatientRepository.save(patientInfo);

    // DB에서 최신 환자 정보를 조회
    const savedPatient = await PatientRepository.findOneBy({ PatientKey: patientInfo.PatientKey });

    // 클라이언트에게 환자 정보 브로드캐스트
    broadcast(wss, { type: 'NEW_PATIENT', data: savedPatient });

    res.status(201).json({ message: 'Patient information received', data: savedPatient });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const handleGetPatient = async (req: Request, res: Response) => {
  const { PatientKey } = req.params;

  const patientKey = Number(PatientKey);

  // 환자 정보를 데이터베이스에서 조회
  const patient = await PatientRepository.findOne({ where: { PatientKey: patientKey } });
  
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }

  return res.status(200).json(patient);
};