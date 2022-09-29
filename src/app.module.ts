import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttController } from './mqtt/mqtt.controller';
import { MqttService } from './mqtt/mqtt.service';
import { MqttModule } from './mqtt/mqtt.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [MqttModule],
  controllers: [AppController, MqttController],
  providers: [AppService, MqttService, AppGateway],
})
export class AppModule {}
