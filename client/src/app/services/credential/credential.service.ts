import { Injectable } from '@angular/core';
import { GlobalService } from "../global/global.service";

@Injectable()
export class CredentialService {

  constructor(
    private global: GlobalService
  ) { }

  public getDataFromToken(token: string): Promise<any[]> {
    return fetch(this.global.getApiUrl()+'getdata',
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
