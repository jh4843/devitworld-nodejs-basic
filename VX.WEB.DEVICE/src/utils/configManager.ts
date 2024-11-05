import fs from 'fs';
import path from 'path';

class ConfigManager {
  private static instance: ConfigManager;
  private configFilePath: string;
  private config: { ip: string; port: number };

  private constructor() {
    this.configFilePath = path.join(__dirname, 'config', 'config.json');
    this.config = {
      ip: 'localhost',
      port: 3000,
    };

    this.loadConfig();
  }

  // Singleton 패턴을 위한 인스턴스 생성
  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  // JSON 파일에서 설정을 로드
  private loadConfig() {
    if(fs.existsSync(this.configFilePath) === true)
    {
      const configFile = fs.readFileSync(this.configFilePath, 'utf-8');
      this.config = JSON.parse(configFile);
    }
  }

  // 현재 설정을 반환
  public getConfig() {
    return this.config;
  }

  // 새로운 설정을 저장
  public saveConfig(newConfig: { ip: string; port: number }) {
    this.config = newConfig;
    fs.writeFileSync(this.configFilePath, JSON.stringify(this.config, null, 2), 'utf-8');
  }
}

export const configManager = ConfigManager.getInstance();
