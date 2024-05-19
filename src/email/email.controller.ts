import { Body, Controller, Post } from '@nestjs/common';
import { MailingService } from './services/mailing.service';

@Controller('email')
export class EmailController {
  constructor(private readonly mailService: MailingService) {}

  @Post()
  public async sendMail(@Body() body) {
    return this.mailService.sendMail(body);
  }
}
