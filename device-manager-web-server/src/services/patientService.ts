import { Request, Response } from 'express';
import { wss } from '../app';
import { Patient } from '../entity/Patient';
import { broadcast } from '../utils/webSocketUtils';
import { AppDataSource } from '../database';

export const handleNewPatient = async (req: Request, res: Response) => {
  const patientRepo = AppDataSource.getRepository(Patient);
  const patientInfo = patientRepo.create(req.body as Patient);

  try {
    await patientRepo.save(patientInfo);

    // DB에서 최신 환자 정보를 조회
    const savedPatient = await patientRepo.findOneBy({ id: patientInfo.id });

    // 클라이언트에게 환자 정보 브로드캐스트
    broadcast(wss, { type: 'NEW_PATIENT', data: savedPatient });

    res.status(201).json({ message: 'Patient information received', data: savedPatient });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};