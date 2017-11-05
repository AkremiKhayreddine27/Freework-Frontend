import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from './../../../../services/entry.service';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.scss']
})
export class CreateEntryComponent implements OnInit {

  public title:string;
  public description:string;
  public prize:number;

  public contestId:number;

  constructor(public route:ActivatedRoute,public entryService:EntryService) { }

  ngOnInit() {
    this.contestId = this.route.snapshot.params['id'];
  }

  storeEntry(){
    this.entryService.store({
      title:this.title,
      description:this.description,
      prize:this.prize
    },this.contestId);
  } 

}
