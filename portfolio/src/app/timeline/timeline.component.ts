import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Trainee } from '../models/trainee.model';
import { TraineeService } from '../services/trainee.service';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @ViewChild('verticalRule') verticalRule: ElementRef;
  @ViewChild('exp') exp: ElementRef;

  public window: Window = window;
  public trainees: Trainee[];
  constructor(private traineeService: TraineeService) {
    this.trainees = this.traineeService.traineesList;
  }
  ngOnInit(): void {
  }

  onResized($event: ResizedEvent){
    if(this.verticalRule)
      this.verticalRule.nativeElement.style.height = $event.newHeight - this.exp.nativeElement.offsetHeight - 140 + 'px';
  }

}
