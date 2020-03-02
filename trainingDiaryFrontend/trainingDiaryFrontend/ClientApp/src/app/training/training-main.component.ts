import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/person/person.service'
import { GymSet } from '../models/gymSet';
import { TrainingService } from './training.service';
import { Person } from '../models/person';

@Component({
  selector: 'training-main',
  templateUrl: './training-main.component.html',
})
export class TrainingComponent implements OnInit {
  gymSets: GymSet[];
  personId: number;
  dataSource = this.gymSets;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private trainingService: TrainingService, private personService: PersonService) {
  }

  ngOnInit() {
    this.personService.getValue().subscribe(person => {
      if (person.idPerson !== 0) {
        this.personId = person.idPerson;
        this.getGymSets();
      }
    })
  }

  private getGymSets() {
    console.log("FETCHING THE JUICY DATA")
    this.trainingService.getGymSets$(this.personId).subscribe(result => {
      console.log(result);
      this.gymSets = result;
    });
  }
}
