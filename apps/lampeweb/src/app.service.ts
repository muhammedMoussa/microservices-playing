import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  public getHello(): Promise<string> {
    return this.client.send<string, string>('getHello', 'Michael').toPromise();
  }

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 5000,
      },
    })
  }
}
