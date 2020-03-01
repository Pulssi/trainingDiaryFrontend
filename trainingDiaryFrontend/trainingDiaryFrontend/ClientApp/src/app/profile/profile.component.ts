import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { PersonService } from '../person/person.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService, public personService: PersonService) { }

  ngOnInit() {
    console.log(this.personService.person);
  }
}
