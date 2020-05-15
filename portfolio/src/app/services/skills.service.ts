import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';
import { BehaviorSubject } from 'rxjs';
import {httpOptionsBase, serverUrlApi} from '../../configs/server.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class SkillsService {
    private URL: string = serverUrlApi;
    private httpOptions = httpOptionsBase;
    public languages: Skill[];
    public technos: Skill[]; 
    public speaks: Skill[]; 
    public languages$: BehaviorSubject<Skill[]> = new BehaviorSubject(this.languages);
    public technos$: BehaviorSubject<Skill[]> = new BehaviorSubject(this.technos);
    public speaks$: BehaviorSubject<Skill[]> = new BehaviorSubject(this.speaks);
    
    constructor(private http: HttpClient) {
        this.setLanguagesFromUrl();
        this.setTechnosFromUrl();
        this.setSpeaksFromUrl();
      }
    
      setLanguagesFromUrl() {
        this.http.get<Skill[]>(this.URL + '/languages').subscribe((result) => {
            this.languages = result;
            this.languages$.next(this.languages);
    
        });
      }

      setTechnosFromUrl(){
        this.http.get<Skill[]>(this.URL + '/technos').subscribe((result) => {
            this.technos = result;
            this.technos$.next(this.technos);
          });
      }

      setSpeaksFromUrl(){
        this.http.get<Skill[]>(this.URL + '/speaks').subscribe((result) => {
            this.speaks = result;
            this.speaks$.next(this.speaks);
          });
      }
    

}