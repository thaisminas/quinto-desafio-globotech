import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class RankingService {
  constructor(
    @Inject('USER_REPOSITORY') private UserRepository: Repository<User>,
    private httpService: HttpService,
  ) {}

  getNames(): Observable<any> {
    return this.httpService.get('https://www.amiiboapi.com/api/character');
  }

  createUser() {
    const users = [];
    return this.getNames().subscribe((res) => {
      const stringUsers = JSON.stringify(res.data.amiibo);
      const arrayUsers = JSON.parse(stringUsers);

      arrayUsers.forEach((element, i) => {
        if (i <= 100) {
          users.push({
            name: element.name,
            score: Math.floor(Math.random() * (1000 + 1)),
          });
        }
      });

      users.sort(function (a, b) {
        return a.score - b.score;
      });

      users.reverse();

      users.forEach(async (element, i) => {
        element.ranking = i;
      });

      console.log(users);
    });
    
  }

};

