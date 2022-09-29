import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @MessagePattern('notification_channel')
  getNotifications(@Payload() data) {
    console.log(data);
    const randomNumber = Math.floor(Math.random() * 100000);
    console.log(randomNumber);
    return `Random Number is ${randomNumber}`;
  }

  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
