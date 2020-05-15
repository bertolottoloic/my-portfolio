import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @ViewChild('verticalRule') verticalRule: ElementRef;
  @ViewChild('exp') exp: ElementRef;


  @Input()
  public title: string;
  @Input()
  public trainees: any[];
  public window: Window = window;
  
  constructor() {
    
  }
  ngOnInit(): void {
  }

  onResized($event: ResizedEvent){
    if(this.verticalRule)
      this.verticalRule.nativeElement.style.height = $event.newHeight - this.exp.nativeElement.offsetHeight - 140 + 'px';
  }

}
