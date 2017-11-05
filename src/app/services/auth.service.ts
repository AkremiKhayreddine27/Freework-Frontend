import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(public http:Http,public router:Router) { }

  getAccessToken(){
    let headers = new Headers({'Authorization': 'Basic '+btoa('angular:secret')});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/oauth/token?grant_type=password&username='+'akremi'+'&password='+'123456'+'', null, options)
    .map(res => res.json())
    .subscribe(
      data => this.saveToken(data),
      err => alert('Invalid Credentials')
    ); 
  }

  saveToken(token){
    console.log(token);
    localStorage.setItem('token',token.access_token);
  }

}
