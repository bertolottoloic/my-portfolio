import { Injectable } from '@angular/core';
import { Trainee } from '../models/trainee.model';
import { BehaviorSubject } from 'rxjs';
import {httpOptionsBase, serverUrlApi} from '../../configs/server.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class TraineeService {
    private URL: string = serverUrlApi;
    private httpOptions = httpOptionsBase;
    public formations: Trainee[];
    public experiences: Trainee[]; 
    public formations$: BehaviorSubject<Trainee[]> = new BehaviorSubject(this.formations);
    public experiences$: BehaviorSubject<Trainee[]> = new BehaviorSubject(this.experiences);
    
    constructor(private http: HttpClient) {
        this.setFormationsFromUrl();
        this.setExperiencesFromUrl();
      }
    
      setFormationsFromUrl() {
        this.http.get<Trainee[]>(this.URL + '/formations').subscribe((result) => {
            this.formations = result;
            this.formations$.next(this.formations);
    
        });
      }

      setExperiencesFromUrl(){
        this.http.get<Trainee[]>(this.URL + '/experiences').subscribe((result) => {
            this.experiences = result;
            this.experiences$.next(this.experiences);
          });
      }
    

}