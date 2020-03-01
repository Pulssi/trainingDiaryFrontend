import { Component } from '@angular/core';
import { PersonService } from 'src/app/person/person.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  currentUser: string;

  constructor(private personService: PersonService) {
  }
}
