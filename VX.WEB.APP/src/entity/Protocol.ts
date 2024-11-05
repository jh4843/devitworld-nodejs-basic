// entity/Patient.ts

export class Protocol {
  ProtocolID: string; // Step Key
  ProtocolName: string;

  constructor(ProtocolID: string, ProtocolName: string) {
    this.ProtocolID = ProtocolID;
    this.ProtocolName = ProtocolName;
  }

  static fromJSON(json: any): Protocol {
    return new Protocol(json.protocolID, json.protocolName);
  }

  toJson() {
    return {
      protocolID: this.ProtocolID,
      protocolName: this.ProtocolName
    };
  }
}
