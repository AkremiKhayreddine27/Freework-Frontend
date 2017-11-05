import { Component, OnInit } from '@angular/core';
import { ContestService } from './../../../services/contest.service';

@Component({
  selector: 'app-create-contest',
  templateUrl: './create-contest.component.html',
  styleUrls: ['./create-contest.component.scss']
})
export class CreateContestComponent implements OnInit {
  public title:string;
  public description:string;
  public duration:number;
  public status:string = 'active';
  public type:string;
  public prize:number;

  constructor(public contestService:ContestService) { }

  ngOnInit() {

  }

  storeContest(){
    this.contestService.store({
      title:this.title,
      description:this.description,
      duration:this.duration,
      status:"active",
      type:this.type,
      prize:this.prize
    });
  }

}
