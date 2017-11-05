import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';

@Injectable()
export class FreelancerService {

  constructor(public http:Http) { }
  
  findByUrl(url:string){
    let headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem('token')});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url,options).map(response=>response.json()).toPromise();
  }
}
