import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.css']
})
export class PresentationPageComponent implements OnInit {

  public age: number;
  constructor() {
    const date1 = new Date('March 25, 1999 22:00:00');
    const date2 = Date.now();
    console.log(date2)
    const lapTime = date2-date1.getTime();
    this.age = Math.trunc(lapTime/31558432538.65);
  }

  ngOnInit(): void {
    
  }

}
