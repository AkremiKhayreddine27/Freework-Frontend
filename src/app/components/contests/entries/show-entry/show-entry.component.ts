import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from './../../../../services/entry.service';
import { FreelancerService } from './../../../../services/freelancer.service';

@Component({
  selector: 'app-show-entry',
  templateUrl: './show-entry.component.html',
  styleUrls: ['./show-entry.component.scss']
})
export class ShowEntryComponent implements OnInit {

  public id:number;
  public entry:any = {
    id:''
  };
  public freelancer:any = {
    name:''
  }

  constructor(public route:ActivatedRoute,public entryService:EntryService,public freelancerService:FreelancerService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.entryService.find(this.id).subscribe(entry=>{
      this.entry =entry;
      this.freelancerService.findByUrl(this.entry._links.freelancer.href).then(freelancer=>{
        this.freelancer = freelancer;
      });
    });
  }

}
