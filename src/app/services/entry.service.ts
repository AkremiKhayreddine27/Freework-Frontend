import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';

@Injectable()
export class EntryService {

  public contestsUrl:string = environment.backendBaseURL+"/contests";
  public entriesUrl:string = environment.backendBaseURL+"/entries";
  public freelancersUrl:string = environment.backendBaseURL+"/freelancers";

  constructor(public http:Http) { }

  all(contestId){
    return this.http.get(this.contestsUrl+"/"+contestId+"/entries").map(response=>response.json()).toPromise();
  }

  find(id){
    return this.http.get(this.entriesUrl+"/"+id).map(response=>response.json());
  }

  associateFreelancer(entryId,freelancerId){
    let headers = new Headers({'Content-Type': 'text/uri-list'});
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.entriesUrl+"/"+entryId+"/freelancer",this.freelancersUrl+"/"+freelancerId,options)
    .map(response=>response.json());
  }

  associateContest(entryId,contestId){
    let headers = new Headers({'Content-Type': 'text/uri-list'});
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.entriesUrl+"/"+entryId+"/contest",this.contestsUrl+"/"+contestId,options)
    .map(response=>response.json());
  }

  store(data:any,contestId){
    this.http.post(this.entriesUrl,data).map(response=>response.json()).subscribe(entry=>{
      this.associateFreelancer(entry.id,2).subscribe(response=>{
        this.associateContest(entry.id,contestId).subscribe();
      }); 
    });
  }

  destroy(id){
    return this.http.delete(this.entriesUrl+"/"+id).map(response=>response.json());
  }

}
