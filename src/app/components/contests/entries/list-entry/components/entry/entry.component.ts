import { Component, OnInit,Input } from '@angular/core';
import { FreelancerService } from './../../../../../../services/freelancer.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Input() entry:any;
  public freelancer:any;
  public loading:boolean = true;

  constructor(public freelancerService:FreelancerService) { }

  ngOnInit() { 
    this.freelancerService.findByUrl(this.entry._links.freelancer.href).then(freelancer=>{
      this.freelancer = freelancer;
      this.loading = false;
    });
  }

  deleteEntry(){
    console.log(this.entry);
  }

}
