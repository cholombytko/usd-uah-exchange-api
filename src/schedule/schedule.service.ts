import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RateService } from 'src/rate/rate.service';
import { SubscribeService } from 'src/subscribe/subscribe.service';

@Injectable()
export class ScheduleService {
  constructor(
    private readonly subscribeService: SubscribeService,
    private readonly rateService: RateService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_NOON)
  public async sendEmails(): Promise<void> {
    const { currencyCode, rate, date } =
      await this.rateService.getExchangeRate();

    const mailMessage = this.mailHtmlTemplate(currencyCode, rate, date);
    const mailSubject = 'Exchange rate USD to UAH';

    await this.subscribeService.sendMailToSubscribers({
      html: mailMessage,
      subject: mailSubject,
    });
  }

  private mailHtmlTemplate(
    currencyCode: string,
    rate: number,
    date: string,
  ): string {
    return `<p>Current rate ${currencyCode} to UAH - ${rate}. Date: ${date}</p>`;
  }
}
