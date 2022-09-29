import { Injectable } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MqttDataType } from './model/base';

@WebSocketGateway(11110, {
  transports: ['websocket'],
})
@Injectable()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('notification_channel')
  handleMessage(@MessageBody() data: any) {
    this.server.emit('notification_channel', data);
  }

  afterInit(server: Server) {
    console.log('Init');
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log('connect');
  }

  handleDisconnect(client: Socket) {
    console.log('disconnect');
  }

  @SubscribeMessage('notification_channel')
  sendMessage(message: MqttDataType): void {
    this.server.emit('notification_channel', message);
  }
}
