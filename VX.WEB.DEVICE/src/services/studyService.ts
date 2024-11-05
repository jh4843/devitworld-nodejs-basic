import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import { wss } from '../app';
import { Study } from '../entity/Study';
import { broadcast } from '../utils/webSocketUtils';

export const StudyRepository = AppDataSource.getRepository(Study);

export const handleNewStudy = async (req: Request, res: Response) => {
  const studyInfo = StudyRepository.create(req.body as Study);

  try {
    await StudyRepository.save(studyInfo);

    // DB에서 최신 스터디 정보를 조회
    const savedStudy = await StudyRepository.findOneBy({ StudyKey: studyInfo.StudyKey });

    // 클라이언트에게 스터디 정보 브로드캐스트
    broadcast(wss, { type: 'NEW_STUDY', data: savedStudy });

    res.status(201).json({ message: 'Study information received', data: savedStudy });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
