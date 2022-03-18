import { Controller, Get } from '@nestjs/common';
import { RankingService } from '../services/ranking.service';

@Controller()
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Get()
  async create(): Promise<void> {
    await this.rankingService.createUser();
  }

  // @Get('/data')
  // async order(): Promise<void> {
  //   await this.rankingService.insertDados();
  // }

  // @Get()
  // getRanking(@Query () getUserDTO: getUserDTO): string {
  //   return this.rankingService.getRanking();
  // }
}
