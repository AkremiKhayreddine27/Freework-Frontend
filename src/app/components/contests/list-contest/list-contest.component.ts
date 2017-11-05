import { Component, OnInit } from '@angular/core';
import {ContestService} from '../../../services/contest.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-list-contest',
  templateUrl: './list-contest.component.html',
  styleUrls: ['./list-contest.component.scss']
})
export class ListContestComponent implements OnInit {

  public contests:any[];

  constructor(public contestService:ContestService,public auth:AuthService) { }

  ngOnInit() {
    this.auth.getAccessToken();
    this.contestService.all().then(contests => {
      this.contests = contests._embedded.contests;
    }).catch((error:Error)=>{
      console.log(error.message);
    });
  }

}
