import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Patient } from "./Patient";


@Entity()
export class Study {
  @PrimaryColumn({ type: "text", nullable: false, unique: true })
  @IsNotEmpty({ message: 'ID should not be empty' })
  StudyKey: number = -1;

  @ManyToOne(() => Patient, patient => patient.PatientKey)
  PatientKey: number = -1;

  @Column({ type: "nvarchar", length:8, nullable: true })
  StudyDate: string| null = null;

  @Column({ type: "nvarchar", length:16, nullable: true })
  StudyTime: string | null = null;

  @Column({ type: "nvarchar", length:64, nullable: true })
  AccessionNumber: string | null = null;

  @Column({ type: "nvarchar", length:1024, nullable: true })
  StudyDescription: string | null = null;

  @Column({ type: "nvarchar", length:128, nullable: true })
  StudyInstanceUID: string | null = null;

  @Column({ type: "nvarchar", length:16, nullable: true })
  StudyID: string | null = null;

  @Column({ type: "nvarchar", length:4, nullable: true })
  PatientAge: number | null = null;

  @Column({ type: "float", nullable: true })
  PatientSize: number | null = null;

  @Column({  type: "float", nullable: true })
  PatientWeightLb: number | null = null;

  @Column({ type: "nvarchar", length:16, nullable: true })
  Modality: string | null = null;

  static fromJSON(data: any): Study {
    const study = new Study();
    study.StudyKey = data.StudyKey;
    study.PatientKey = data.PatientKey;
    study.StudyDate = data.StudyDate;
    study.StudyTime = data.StudyTime;
    study.AccessionNumber = data.AccessionNumber;
    study.StudyDescription = data.StudyDescription;
    study.StudyInstanceUID = data.StudyInstanceUID;
    study.StudyID = data.StudyID;
    study.PatientAge = data.PatientAge;
    study.PatientSize = data.PatientSize;
    study.PatientWeightLb = data.PatientWeightLb;
    study.Modality = data.Modality;

    return study;
  }

  toJson() {
    return {
      StudyKey: this.StudyKey,
      PatientKey: this.PatientKey,
      StudyDate: this.StudyDate,
      StudyTime: this.StudyTime,
      AccessionNumber: this.AccessionNumber,
      StudyDescription: this.StudyDescription,
      StudyInstanceUID: this.StudyInstanceUID,
      StudyID: this.StudyID,
      PatientAge: this.PatientAge,
      PatientSize: this.PatientSize,
      PatientWeightLb: this.PatientWeightLb,
      Modality: this.Modality,
    };
  }
}

