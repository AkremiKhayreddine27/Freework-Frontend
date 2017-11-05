import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EntryService } from './../../../../services/entry.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import * as _ from 'lodash';

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.scss']
})
export class ListEntryComponent implements OnInit {

  public contestId:number;
  public entries:any[];
  public chunk:any[];
  constructor(public entryService:EntryService,public route:ActivatedRoute,public spinnerService: Ng4LoadingSpinnerService) {

   }

  ngOnInit() {
    this.contestId = this.route.snapshot.params['id'];
    this.entryService.all(this.contestId).then(entries=>{
      this.entries = entries._embedded.entries;
      this.chunk = _.chunk(this.entries,3);
    }).catch((error:Response)=>{
      console.log(error.status);
    });
  }

  destroyTournament(entryIndex){
    this.entries.splice(entryIndex,1);
    this.chunk = _.chunk(this.entries,3);
  }

}
