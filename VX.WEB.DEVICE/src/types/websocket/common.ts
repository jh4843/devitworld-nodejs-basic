import { WebSocket } from 'ws';
import { RequestCommmands } from './request';
import { SetCommmands } from './set';
import { EventCommmands } from './event';

export enum WsParticipantTypes {
  unknown = 0,  // sender: unknown, receiver: all
  vxvueWebServer = 1,
  vxvue = 2,    // VXvue & VSS
  generator = 101,
  dap = 102,
  collimator = 103,
  battery = 104,
  barcode = 105,
  display = 106,
  equipment = 107,
  exposureControl = 1000,
  totalSystem = 10000,
  camera2d = 10001,
}

//export type WsParticipantType = (typeof WsParticipantTypes)[number];
// 10001 ~ 20000: Request Commands
// 30001 ~ 40000: Set Commands
// 50001 ~ 60000: Event Commands

export type WsCommands = RequestCommmands | SetCommmands | EventCommmands;

// export enum WsCommands {
//   unknown = 0,
//   // System Commands 
//   ping = 1,
//   pong = 2,
//   registerClient = 11,

//   // Patient Information
//   setPatientInfo = 101,

//   updatePatientInfo = 102,

//   // Study Information
//   sendStudyInfo = 201,
//   updateStudyInfo = 202,
  
//   // Series Information
//   sendSeriesInfo = 301,
//   updateSeriesInfo = 302,
  
//   // Image Information
//   sendImageInfo = 401,
//   updateImageInfo = 402,

//   // Procedure Information
//   sendProcedureInfo = 601,
//   updateProcedureInfo = 602,
  
//   // Step Information
//   sendStepInfo = 601,
//   updateStepInfo = 602,

//   // Events
//   eventStartExam = 1001,
//   eventCompleteExam = 1002,
// }

//export type WsCommand = (typeof WsCommands)[number];

export enum WsResults {
  failure = 0,
  success = 1,
}

//export type WsResult = (typeof WsResults)[number];

export interface VXvueWebSocket extends WebSocket {
  type: WsParticipantTypes;
}

export interface VXvueWsMessage<T=any>{
  sender: WsParticipantTypes;
  receiver?: WsParticipantTypes | null;
  result?: WsResults | null;
  command: WsCommands;
  data?: T;
}
