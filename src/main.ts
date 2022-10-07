import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microServices';
import { WsAdapter } from './util/gateway';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.MQTT,
      options: {
        url: 'mqtt://localhost:1883',
      },
    },
  );
  app.listen();

  const app2 = await NestFactory.create(AppModule);
  app2.useWebSocketAdapter(new WsAdapter(app2));
  // app2.listen(8080);
  // const app3 = await NestFactory.create(AppGateway);

  // app3.listen(3000);
  // app3.listen();
}
bootstrap();
