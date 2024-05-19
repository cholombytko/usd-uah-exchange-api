import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ISendMail } from '../interfaces/send-mail.interface';
import { MailSendingException } from '../exceptions/mail-sending.exception';

@Injectable()
export class MailingService {
  constructor(private readonly mailerService: MailerService) {}

  public async sendMail(payload: ISendMail): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
      });
    } catch (error) {
      console.error('Error sending email: ', error);
      throw new MailSendingException();
    }
  }
}
