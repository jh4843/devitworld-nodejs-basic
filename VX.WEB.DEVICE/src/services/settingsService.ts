import { Request, Response } from 'express';
import { configManager } from '../utils/configManager';
import { exec } from 'child_process'; // 서버 재시작을 위한 모듈

export const handleGetSettings = async (req: Request, res: Response) => {
  const settings = configManager.getConfig();
  res.status(200).json(settings);
}

export const handleSaveSettings = async (req: Request, res: Response) => {

  const { ip, port } = req.body;

  // IP와 Port 유효성 검사
  if (!ip || !port || isNaN(Number(port))) {
    return res.status(400).json({ error: 'Invalid IP or port.' });
  }

  // 새로운 설정 저장
  configManager.saveConfig({ ip, port: Number(port) });

  // 설정 저장 후 서버 재시작
  res.status(200).json({ message: 'Settings saved. Server is restarting...' });

  // 서버 재시작 (Linux나 Windows 환경에 따라 다름)
  // 예시: pm2를 사용하여 서버를 재시작하거나, 직접 스크립트를 실행할 수 있음.
  exec('npm run restart', (err) => {
    if (err) {
      console.error('Error restarting server:', err);
    } else {
      console.log('Server restarted successfully');
    }
  });
}