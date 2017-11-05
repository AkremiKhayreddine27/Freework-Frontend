import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ContestService } from './../../../services/contest.service';
import { FreelancerService } from './../../../services/freelancer.service';

@Component({
  selector: 'app-show-contest',
  templateUrl: './show-contest.component.html',
  styleUrls: ['./show-contest.component.scss']
})
export class ShowContestComponent implements OnInit {
  public id:number;
  public contest:any = {
    id:'',
    title:'',
    description:'',
    entries:[] 
  };
  public publisher:any = {
    name:''
  };

  constructor(
    public router:Router,
    public route:ActivatedRoute,
    public contestService:ContestService,
    public freelancerService:FreelancerService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.contestService.find(this.id).then(contest=>{
      this.contest = contest;
      this.freelancerService.findByUrl(this.contest._links.publisher.href).then(freelancer=>{
        this.publisher = freelancer;
      });
    }).catch((error:Response)=>{
      console.log(error.status);
    });
  }

}
