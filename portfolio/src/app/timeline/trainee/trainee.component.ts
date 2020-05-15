import { Component, OnInit, Input,  ViewChild, ElementRef, HostListener } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.scss'],
  animations: [
  trigger('fadeInOut', [
    state('initial', style({
      opacity: 0
    })),
    state('final', style({
      opacity: 100
    })),
    transition('final=>initial', animate('1000ms')),
    transition('initial=>final', animate('1100ms ease-in'))
  ]),
  trigger('EnterLeft', [
    state('initial', style({transform: 'translateX(100%)'})),
    state('final', style({transform: 'translateX(0%)'})),
    transition('initial=>final', animate('1000ms ease-out'))
  ]),
  trigger('EnterRight', [
    state('initial', style({transform: 'translateX(-100%)'})),
    state('final', style({transform: 'translateX(0%)'})),
    transition('initial=>final', animate('1000ms ease-out'))
  ]),
  trigger('Display', [
    state('initial', style({display: 'none'})),
    state('final', style({display: 'unset'})),
    transition('initial=>final', animate('1ms'))
  ])

]
})
export class TraineeComponent implements OnInit {
  @ViewChild('img') img: ElementRef;
  @ViewChild('des') des: ElementRef;


  @Input()
  public trainee: any;

  @Input()
  public index: number;

  public window:Window = window;

  public currentState: string;

  constructor() {

  }

  ngOnInit(): void {
    this.currentState = 'initial';
  }

  onResized($event: ResizedEvent) {
    console.log($event.newHeight)
    this.img.nativeElement.style.height = $event.newHeight + 'px';

  }


  onAppear(): void {
    this.currentState = 'final';
  }


}
