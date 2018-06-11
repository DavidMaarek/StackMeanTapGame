import { Injectable } from '@angular/core';
import { GlobalService } from "../global/global.service";

@Injectable()
export class GameService {

  constructor(
    private global: GlobalService
  ) { }

  public saveTap(
    token: string,
    content: {
      id_user: string,
      score: number
    }): Promise<any[]> {
    return fetch(this.global.getApiUrl()+'save',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'x-access-token': token
        },
        body: JSON.stringify(content)
      })
      .then(data => {
        return Promise.resolve(data);
      })
      .then( data => data.json() )
      .catch((err) => console.log(err) );
  }

  public getScores(
    token: string
  ): Promise<any[]> {
    return fetch(this.global.getApiUrl()+'getscores',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      })
      .then(data => {
        return Promise.resolve(data);
      })
      .then( data => data.json() )
      .catch((err) => console.log(err) );
  }
}
