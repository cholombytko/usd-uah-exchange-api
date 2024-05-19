import { Module } from '@nestjs/common';
import { RateModule } from './rate/rate.module';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './email/email.module';
import { SubscribeModule } from './subscribe/subscribe.module';
import { DatabaseModule } from './database.module';
import { MailModule } from './mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RateModule,
    EmailModule,
    SubscribeModule,
    DatabaseModule,
    MailModule,
  ],
})
export class AppModule {}
