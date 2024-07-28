import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Patient } from "./Patient";

@Entity()
export class Study {
  @PrimaryColumn({ type: "text"})
  @IsNotEmpty({ message: 'ID should not be empty' })
  studyId: string = "";

  @ManyToOne(() => Patient, patient => patient.id)
  @JoinColumn({ name: "patientId" })
  @IsNotEmpty({ message: 'Patient ID should not be empty' })
  patient: Patient = new Patient();
}
