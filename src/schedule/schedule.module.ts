import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { SubscribeModule } from 'src/subscribe/subscribe.module';
import { RateModule } from 'src/rate/rate.module';

@Module({
  imports: [SubscribeModule, RateModule],
  providers: [ScheduleService],
})
export class ScheduleModule {}
