import { Component } from '@angular/core';
import { NotificationService } from './core/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth/auth.service';
import { PersonService } from './person/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  public personId: any;

  constructor(
    private notificationService: NotificationService,
    private snackBar: MatSnackBar,
    private auth: AuthService,
    private personService: PersonService,
  ) {
    this.notificationService.notification$.subscribe((message) => {
      this.snackBar.open(message, "OK", { duration: 5000 });
    });
  }
}
