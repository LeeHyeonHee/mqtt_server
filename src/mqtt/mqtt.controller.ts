import { Server } from 'socket.io';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MqttDataType } from 'src/model/base';
import { SubscribeMessage, WebSocketServer } from '@nestjs/websockets';
import { AppGateway } from 'src/app.gateway';

@Controller('mqtt')
export class MqttController {
  constructor(private gateway: AppGateway) {}
  @MessagePattern('notification_channel')
  getNotifications(@Payload() data: MqttDataType) {
    // return `Random Number is ${data.data}`;
    console.log('수신중');
    console.log(data);
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('dmddo')
  getDmddo(@Payload() data) {
    return data;
  }
}
// 1024 KB 패킷
// 실시간 ? 1초마다 전송
// 테스트 ? ! 스케쥴러 1초 ??
// 도커나이제이션



//api 목업 데이터 만들어서 그 사용자 별로 만들수 있는 토픽이 따로잇다 

//제어 ? ?  엄청 간단하게 ? 어려웡 .. .안간단해 
//파라미터로 회원번호를 1 2 정도 해서 1 2 다른 토픽날라오게 넹 