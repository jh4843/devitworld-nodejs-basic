import { Entity, PrimaryColumn, Column } from "typeorm";
import { IsNotEmpty, IsInt, IsDateString } from 'class-validator';

@Entity()
export class Patient {
  @PrimaryColumn({ type: "text", nullable: false})
  @IsNotEmpty({ message: 'ID should not be empty' })
  id: string = "";

  @Column({ type: "text", nullable: false})
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string = "";

  @Column({ type: "integer", nullable: false})
  @IsInt({ message: 'Age should be an integer' })
  age: number = 0;

  @Column({type: "date", nullable: false})
  @IsDateString({}, { message: 'BirthDate should be a valid date' })
  birthDate: Date = new Date();
}
