import { Module } from '@nestjs/common';
import { EmailService } from './services/email.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Email } from './entities/email.entity';
import { MailingService } from './services/mailing.service';

@Module({
  imports: [TypeOrmModule.forFeature([Email])],
  providers: [EmailService, MailingService],
  exports: [EmailService, MailingService],
})
export class EmailModule {}
