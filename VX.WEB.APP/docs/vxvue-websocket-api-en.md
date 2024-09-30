# Dipslay Integration WebSocket API Documentation

## 1. Introduction
The **Display Integration WebSocket API** enables real-time, bi-directional communication between a client and display devices like monitors. 

This API provides the means for transmitting various data from **VXvue**, such as patient, study, image information, and more. 

The API allows for efficient real-time data exchange, making it ideal for medical imaging applications and other healthcare-related environments.


## 2. Connection Info
- **WebSocket URL**: `ws://{IP address}:{Port Number}`
- Default IP address: `localhost`
- Default Port Number: `55111`
  
## 3. Message Format

### Definition
Messages sent and received through the WebSocket connection are in **JSON** format.

Below is the structure of the message that the client should use, and the types of commands the server can handle.

### Common Message Structure

* sender: Types of the sender
  * device
  * VSS 
* command:
  * *Command name*
* data:
  * Data in json format (key-value)

#### Example

``` json
{
    "type": "VSS",
    "cmd": "patientInfo",
    "data": {
        "patientID": "pt-1878",
        "patientName": "json",
        "patientSex": 1,
        "patientBirthDate": "19990121"
    }
}
```

## 4. Message Flow

### From VSS(VXvue) to devices
The workflow for this WebSocket API is designed to broadcast display events received from VSS (VXvue) to all connected devices in real time. The flow is as follows:

1. VSS (VXvue) sends a display event to the WebSocket server.
2. The WebSocket server receives the event and processes it.
3. The server broadcasts the event to all connected devices (ex. second monitor).
4. Each client receives the event and can handle it accordingly (e.g., updating UI).

## 5. Commands
