import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/services/email.service';
import { ICreateSubscription } from './interfaces/create-subscription.interface';
import { ISendToSubscribers } from './interfaces/send-to-subscribers.interface';
import { MailingService } from 'src/email/services/mailing.service';

@Injectable()
export class SubscribeService {
  constructor(
    private emailService: EmailService,
    private mailingService: MailingService,
  ) {}

  public async createSubscription(
    payload: ICreateSubscription,
  ): Promise<{ message: string }> {
    await this.emailService.create(payload.email);
    return { message: 'E-mail succesfully subscribed' };
  }

  public async sendMailToSubscribers(
    payload: ISendToSubscribers,
  ): Promise<void> {
    const subscribers = await this.emailService.findAll(true);
    const mailPromises = subscribers.map((subscriber) => {
      return this.mailingService.sendMail({
        to: subscriber.email,
        subject: payload.subject,
        html: payload.html,
      });
    });

    await Promise.all(mailPromises);
  }
}
