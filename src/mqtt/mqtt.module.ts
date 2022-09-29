import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MqttService } from './mqtt.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [MqttService],
})
export class MqttModule {}
