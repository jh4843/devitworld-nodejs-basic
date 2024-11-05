# Signals
각 Signal은 동작 방식에 따라 3가지 타입으로 구분한다.

## Set
* Destination 으로 Signal을 전송한다.
  * Destination 필수
* Example 
  * Device -> VSS (or VXvue) 정보를 설정한다.
  * VSS (or VXvue) -> Device 정보를 설정한다.

## Request / Respond
* Client는 Request 시, 항상 Respond Signal 응답을 받는다.
* Response를 3s 이상 대기시 Timeout을 발생시킨다.

## Event
* 오직 Command로 Data는 포함하지 않는다.