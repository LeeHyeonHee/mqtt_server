import { Inject, Injectable } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class MqttService {
  @MessagePattern('notification_channel')
  @Cron('* * * * * *', { name: 'RNGTask' })
  getNotifications(@Payload() data) {
    const randomNumber = Math.floor(Math.random() * 100000);
    return `Random Number is ${randomNumber}`;
  }
}
