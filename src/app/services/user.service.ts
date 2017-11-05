import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(public http:Http) { }

  findByUrl(url:string){
    return this.http.get(url).map(response=>response.json());
  }

}
