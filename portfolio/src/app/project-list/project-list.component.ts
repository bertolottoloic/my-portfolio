import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public projects: Project[] = [];  
  constructor(private projectsService: ProjectsService) {
    this.projectsService.projects$.subscribe((res)=>{
      this.projects = res;
    })
  }

  ngOnInit(): void {
  }

}
