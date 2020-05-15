import { Component, OnInit } from '@angular/core';
import { Trainee } from '../models/trainee.model';
import { TraineeService } from '../services/trainee.service';
import { Skill } from '../models/skill.model';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.scss']
})
export class PresentationPageComponent implements OnInit {

  public age: number;
  public formations: Trainee[] = [];
  public works: Trainee[] = [];
  public languages: Skill[] = [];
  public technos: Skill[] = [];
  public speaks: Skill[] = [];

  constructor(private traineeService: TraineeService, private skillsService: SkillsService) {
    this.traineeService.formations$.subscribe((res) => {
      this.formations = res;
    })
    this.traineeService.experiences$.subscribe((res) => {
      this.works = res;
    })
    this.skillsService.languages$.subscribe((res)=> {
      this.languages = res;
    })
    this.skillsService.technos$.subscribe((res)=> {
      this.technos = res;
    })
    this.skillsService.speaks$.subscribe((res)=> {
      this.speaks = res;
    })
    const date1 = new Date('March 25, 1999 22:00:00');
    const date2 = Date.now();
    console.log(date2)
    const lapTime = date2-date1.getTime();
    this.age = Math.trunc(lapTime/31558432538.65);
  }

  ngOnInit(): void {
    
  }

}
