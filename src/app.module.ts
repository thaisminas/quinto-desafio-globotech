import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './ranking/entities/user.entity';
import { RankingModule } from './ranking/ranking-module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'tminas',
      password: 'password',
      database: 'quinto-desafio',
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    RankingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
