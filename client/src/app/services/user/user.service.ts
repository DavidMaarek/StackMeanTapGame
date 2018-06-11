import { Injectable } from '@angular/core';
import { GlobalService } from "../global/global.service";

@Injectable()
export class UserService {

  constructor(
    private global: GlobalService
  ) { }

  doRegister (user: {
    firstName: string,
    lastName: string,
    email: string,
    password: string
  }): Promise<any[]> {
    return fetch(this.global.getApiUrl()+'register',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(data => {
        return Promise.resolve(data);
      })
      .then( data => data.json() )
      .catch((err) => console.log(err) );
  }


  doLogin (user: {
    email: string,
    password: string
  }): Promise<any[]> {
    return fetch(this.global.getApiUrl()+'login',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(data => {
        return Promise.resolve(data);
      })
      .then( data => data.json() )
      .catch((err) => console.log(err) );
  }
}
