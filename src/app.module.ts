import { Module } from '@nestjs/common';
import { RateModule } from './rate/rate.module';

@Module({
  imports: [RateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
