import "reflect-metadata";
import { DataSource } from "typeorm";
import { Patient } from '../entity/Patient';
import { Study } from '../entity/Study';

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "vss.sqlite",
  synchronize: true,
  logging: true,
  entities: [Patient, Study],
  migrations: [],
  subscribers: [],
});

export const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected.");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
