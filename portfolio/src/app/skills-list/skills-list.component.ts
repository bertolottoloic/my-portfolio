import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public skills: Skill[];

  constructor() { }

  ngOnInit(): void {
  }

}
