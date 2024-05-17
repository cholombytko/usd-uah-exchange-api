import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { ICreateSubscription } from './interfaces/create-subscription.interface';

@Injectable()
export class SubscribeService {
  constructor(private emailService: EmailService) {}

  public async createSubscription(payload: ICreateSubscription) {
    return this.emailService.create(payload.email);
  }
}
