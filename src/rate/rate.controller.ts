import { Controller, Get } from '@nestjs/common';
import { RateService } from './rate.service';

@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Get()
  public async getExchangeRate() {
    const result = await this.rateService.getExchangeRate();
    return result;
  }
}
