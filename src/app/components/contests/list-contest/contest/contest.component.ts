import { Component, OnInit, Input } from '@angular/core';
import { FreelancerService } from './../../../../services/freelancer.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {

  @Input() contest:any;
  public publisher:any = {
    name:''
  };
  public loading:boolean = true;

  constructor(public freelancerService:FreelancerService) { }

  ngOnInit() {
    this.freelancerService.findByUrl(this.contest._links.publisher.href).then(freelancer=>{
      this.publisher = freelancer;
      this.loading = false;
    });
  }

}
