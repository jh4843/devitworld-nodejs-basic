import "reflect-metadata";
import { DataSource } from "typeorm";
import { Patient } from '../entity/Patient';
import { Study } from '../entity/Study';

// sqlite3 데이터베이스를 사용하는 DataSource 객체를 생성합니다.
// export const AppDataSource = new DataSource({
//   type: "sqlite",
//   database: "vss.sqlite",
//   synchronize: true,
//   logging: true,
//   entities: [Patient, Study],
//   migrations: [],
//   subscribers: [],
// });

// export const connectDatabase = async () => {
//   try {
//     await AppDataSource.initialize();
//     console.log("Database connected.");
//   } catch (error) {
//     console.error("Database connection error:", error);
//   }
// };

export const AppDataSource = new DataSource({
  type: "mssql",  // Change from sqlite to mssql
  host: "localhost\CHAMELEON", // Add the hostname of your MSSQL server
  port: 1433,  // Default MSSQL port
  username: "sa",  // Your username
  password: "vieworks1!",  // Your password
  database: "DRF",  // Name of the database you're connecting to
  synchronize: true,  // Whether to synchronize your entities automatically
  logging: true,
  entities: [Patient, Study],
  migrations: [],
  subscribers: [],
  extra: {
    trustServerCertificate: true,  // MSSQL-specific option if you're using a self-signed certificate
  }
});

export const connectDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected.");
  } catch (error : any) {
    console.error("Database connection error:", error);
    // Try connecting with the vieworks user if the initial connection fails
    if (error.code === 'ELOGIN') {
      console.log("Trying to connect with vieworks user...");
      AppDataSource.setOptions({
        username: "vieworks",
        password: "your-vieworks-password",
      });
      try {
        await AppDataSource.initialize();
        console.log("Connected with vieworks user.");
      } catch (secondaryError) {
        console.error("Failed to connect with vieworks user as well:", secondaryError);
      }
    }
  }
};