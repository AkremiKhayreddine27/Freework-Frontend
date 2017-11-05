import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';

@Injectable()
export class ContestService {

  public url:string = environment.backendBaseURL+"/contests";
  public freelancersUrl:string = environment.backendBaseURL+"/freelancers";
  public jobsUrl:string = environment.backendBaseURL+"/jobs";
  public headers:Headers = new Headers({'Authorization': 'Bearer '+localStorage.getItem('token')});
  public options:RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(public http:Http) { 

  }

  all(){
    return this.http.get(this.url+"?sort=id,desc",this.options).map(response=>response.json()).toPromise();
  }

  find(id:number){
    return this.http.get(this.url+"/"+id,this.options).map(response=>response.json()).toPromise();
  }

  associatePublisher(contestId,publisherId){
    let headers = new Headers({'Content-Type': 'text/uri-list'});
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.url+"/"+contestId+"/publisher",this.freelancersUrl+"/"+publisherId,options)
    .map(response=>response.json());
  }

  associateJob(contestId,jobId){
    let headers = new Headers({'Content-Type': 'text/uri-list'});
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.url+"/"+contestId+"/job",this.jobsUrl+"/"+jobId,options)
    .map(response=>response.json());
  }

  store(data:any){
     this.http.post(this.url,data).map(response=>response.json()).subscribe(contest=>{
      this.associatePublisher(contest.id,2).subscribe(response=>{
        this.associateJob(contest.id,5).subscribe();
      });
    });
  }


}
