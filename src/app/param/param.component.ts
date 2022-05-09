import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {
  
  public ids:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param :ParamMap) =>{
      let id = parseInt(param.get('id')||'');
      this.ids = id;
    })
    // let id = parseInt(this.route.snapshot.paramMap.get('id')|| '');
  }

}
