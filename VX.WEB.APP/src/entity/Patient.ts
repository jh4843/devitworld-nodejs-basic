import { Entity, PrimaryColumn, Column } from "typeorm";
import { IsNotEmpty, IsInt, IsDateString } from 'class-validator';

@Entity()
export class Patient {
  @PrimaryColumn({ type: "text", nullable: false, unique: true })
  @IsNotEmpty({ message: 'ID should not be empty' })
  patientID: string = "";

  @Column({ type: "text", nullable: false})
  @IsNotEmpty({ message: 'Name should not be empty' })
  patientName: string = "";

  @Column({ type: "integer", nullable: false})
  @IsInt({ message: 'Sex should be an integer' })
  patientSex: number = 0;

  @Column({ type: "text", nullable: true})
  @IsNotEmpty({ message: 'Birth date should not be empty' })
  patientBirthDate: string | undefined;

  // You can add a method to handle the conversion if needed
  static fromJSON(data: any): Patient {
    const patient = new Patient();
    patient.patientID = data.patientID;
    patient.patientName = data.patientName;
    patient.patientSex = data.patientSex;
    patient.patientBirthDate = data.patientBirthDate;
    return patient;
  }

  toJSON() {
    return {
      patientID: this.patientID,
      patientName: this.patientName,
      patientSex: this.patientSex,
      patientBirthDate: this.patientBirthDate,
    };
  }
}
