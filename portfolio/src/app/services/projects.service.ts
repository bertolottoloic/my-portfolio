import { Injectable } from '@angular/core';
import { Trainee } from '../models/trainee.model';
import { BehaviorSubject } from 'rxjs';
import {httpOptionsBase, serverUrlApi} from '../../configs/server.config';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';

@Injectable({
    providedIn: 'root'
})

export class ProjectsService {
    private URL: string = serverUrlApi;
    private httpOptions = httpOptionsBase;
    public projects: Project[];
    public projects$: BehaviorSubject<Project[]> = new BehaviorSubject(this.projects);
    
    constructor(private http: HttpClient) {
        this.setProjectsFromUrl();
      }
    
      setProjectsFromUrl() {
        this.http.get<Project[]>(this.URL + '/projects').subscribe((result) => {
            this.projects = result;
            console.log(result);
            this.projects$.next(this.projects);
    
        });
      }

}