// entity/Patient.ts

export class Protocol {
  ProtocolID: string; // Step Key
  ProtocolName: string;

  constructor(ProtocolID: string, ProtocolName: string) {
    this.ProtocolID = ProtocolID;
    this.ProtocolName = ProtocolName;
  }

  static fromJSON(json: any): Protocol {
    return new Protocol(json.ProtocolID, json.ProtocolName);
  }

  toJson() {
    return {
      ProtocolID: this.ProtocolID,
      ProtocolName: this.ProtocolName
    };
  }
}
