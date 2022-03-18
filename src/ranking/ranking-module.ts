import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RankingController } from './controllers/ranking.controller';
import { RankingService } from './services/ranking.service';
import { providers } from './user.providers';

@Module({
  imports: [HttpModule],
  controllers: [RankingController],
  providers: [RankingService, ...providers],
})
export class RankingModule {}
