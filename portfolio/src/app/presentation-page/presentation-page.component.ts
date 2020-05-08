import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.css']
})
export class PresentationPageComponent implements OnInit {

  public height: string;
  constructor() {
  }

  ngOnInit(): void {
    this.height = window.innerHeight * 0.928 + 'px';
  }

}
