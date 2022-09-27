import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('mqtt')
export class MqttController {
  @MessagePattern('notification_channel')
  getNotifications(@Payload() data) {
    return ``;
  }
}
