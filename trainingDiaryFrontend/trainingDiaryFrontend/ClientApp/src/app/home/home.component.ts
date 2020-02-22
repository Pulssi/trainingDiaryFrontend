import { Component } from '@angular/core';
import { PersonService } from 'src/app/person/person.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private personService: PersonService) {
  }

  public async getCurrentUser() {
    let currentUser = await this.personService.getPerson("email");
    console.log(currentUser);
  }
}
