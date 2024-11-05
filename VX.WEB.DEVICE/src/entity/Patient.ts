import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { IsNotEmpty} from 'class-validator';
import { Study } from "./Study";

@Entity()
export class Patient {
  @PrimaryColumn({ type: "text", nullable: false, unique: true })
  @IsNotEmpty({ message: 'PatientKey should not be empty' })
  PatientKey: number = -1;

  @Column({ type: "nvarchar", length: 64, nullable: true })
  PatientId: string | null = null;

  @Column({ type: "nvarchar", length: 64, nullable: true })
  PatientName: string | null = null;

  @Column({ type: "nvarchar", length: 8, nullable: true })
  PatientBirthDate: string | null = null;

  @Column({ type: "nvarchar", length: 16, nullable: true })
  PatientBirthTime: string | null = null;

  @Column({ type: "nvarchar", length: 16, nullable: true })
  PatientSex: string | null = null;

  @Column({ type: "number", nullable: true })
  Exposured: number | null = null;

  @OneToMany(() => Study, study => study.PatientKey)
  Studies?: Study[];

  static fromJSON(data: any): Patient {
    const patient = new Patient();
    patient.PatientKey = data.patientKey;
    patient.PatientId = data.patientId;
    patient.PatientName = data.patientName;
    patient.PatientBirthDate = data.patientBirthDate;
    patient.PatientBirthTime = data.patientBirthTime;
    patient.PatientSex = data.patientSex;
    patient.Exposured = data.exposured;
    return patient;
  }

  // Json's convention is to use camelCase for keys
  toJson() {
    return {
      patientKey: this.PatientKey,
      patientId: this.PatientId,
      patientName: this.PatientName,
      patientBirthDate: this.PatientBirthDate,
      patientBirthTime: this.PatientBirthTime,
      patientSex: this.PatientSex,
      exposured: this.Exposured,
    };
  }
}
