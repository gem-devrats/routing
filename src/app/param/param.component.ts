import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {
  
  public ids:any;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param :ParamMap) =>{
      let id = parseInt(param.get('id')||'');
      this.ids = id;
    })
    // let id = parseInt(this.route.snapshot.paramMap.get('id')|| '');
  }

  one(){
    this.router.navigate(['/param/' + this.ids + '/one'])
  }

}
