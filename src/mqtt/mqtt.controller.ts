import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MqttDataType } from 'src/model/base';
import { AppGateway } from 'src/app.gateway';

@Controller('mqtt')
export class MqttController {
  constructor(private gateway: AppGateway) {}
  @MessagePattern('notification_channel0')
  getDevice0(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel1')
  getDevice1(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('notification_channel2')
  getDevice2(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('notification_channel3')
  getDevice3(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('notification_channel4')
  getDevice4(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('notification_channel5')
  getDevice5(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('notification_channel6')
  getDevice6(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel7')
  getDevice7(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel8')
  getDevice8(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel9')
  getDevice9(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel10')
  getDevice10(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel11')
  getDevice11(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel12')
  getDevice12(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel13')
  getDevice13(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel14')
  getDevice14(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel15')
  getDevice15(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel16')
  getDevice16(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel17')
  getDevice17(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel18')
  getDevice18(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel19')
  getDevice19(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('notification_channel20')
  getDevice20(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('notification_channel21')
  getDevice21(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('notification_channel22')
  getDevice22(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('notification_channel23')
  getDevice23(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel24')
  getDevice24(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel25')
  getDevice25(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel26')
  getDevice26(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel27')
  getDevice27(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel28')
  getDevice28(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel29')
  getDevice29(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel30')
  getDevice30(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel31')
  getDevice31(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel32')
  getDevice32(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel33')
  getDevice33(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel34')
  getDevice34(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel35')
  getDevice35(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel36')
  getDevice36(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel37')
  getDevice37(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('notification_channel38')
  getDevice38(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('notification_channel39')
  getDevice39(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }

  @MessagePattern('notification_channel40')
  getDevice40(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel41')
  getDevice41(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel42')
  getDevice42(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel43')
  getDevice43(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel44')
  getDevice44(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel45')
  getDevice45(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel46')
  getDevice46(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel47')
  getDevice47(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel48')
  getDevice48(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel49')
  getDevice49(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel50')
  getDevice50(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel51')
  getDevice51(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel52')
  getDevice52(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel53')
  getDevice53(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel54')
  getDevice54(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel55')
  getDevice55(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel56')
  getDevice56(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel57')
  getDevice57(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel58')
  getDevice58(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel59')
  getDevice59(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel60')
  getDevice60(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel61')
  getDevice61(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel62')
  getDevice62(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
  @MessagePattern('notification_channel63')
  getDevice63(@Payload() data: MqttDataType) {
    this.gateway.sendMessage(data);
    return data;
  }
}
