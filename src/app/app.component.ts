import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';

  constructor(private route :Router){}

  arr = [{id:1},{id:2},{id:3}]

  one(item:any){
      this.route.navigate(['/param',item.id])
  }
}
