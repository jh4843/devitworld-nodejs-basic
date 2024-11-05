// entity/Patient.ts

export class Exam {
  PatientID: string;
  PatientName: string;
  PatientSex: string;
  PatientBirthDate: string;
  AccessionNumber: string;
  StudyDescription: string

  constructor(PatientID: string, PatientName: string, PatientSex: string, PatientBirthDate: string, AccessionNumber: string, StudyDescription: string) {
    this.PatientID = PatientID;
    this.PatientName = PatientName;
    this.PatientSex = PatientSex;
    this.PatientBirthDate = PatientBirthDate;
    this.AccessionNumber = AccessionNumber;
    this.StudyDescription = StudyDescription;
  }

  static fromJSON(json: any): Exam {
    return new Exam(json.PatientID, json.PatientName, json.PatientSex, json.PatientBirthDate, json.AccessionNumber, json.StudyDescription);
  }

  // Json's convention is to use camelCase for keys
  toJson() {
    return {
      patientID: this.PatientID,
      patientName: this.PatientName,
      patientSex: this.PatientSex,
      patientBirthDate: this.PatientBirthDate,
      accessionNumber: this.AccessionNumber,
      studyDescription: this.StudyDescription
    };
  }
}
