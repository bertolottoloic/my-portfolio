import { Injectable } from '@angular/core';
import { Trainee } from '../models/trainee.model';
import { TRAINEE_LIST } from '../mocks/trainee.mock' 


@Injectable({
    providedIn: 'root'
})

export class TraineeService {
    private trainees: Trainee[] = TRAINEE_LIST;

    public get traineesList(){
        return this.trainees;
    }
}