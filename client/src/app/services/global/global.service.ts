import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  apiUrl = "http://localhost:8080/api/";

  constructor() { }

  getApiUrl(){
    return this.apiUrl;
  }
}
