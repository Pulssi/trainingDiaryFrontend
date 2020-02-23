import { Component } from '@angular/core';
import { NotificationService } from './core/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(
    private notificationService: NotificationService, private snackBar: MatSnackBar
  ) {
    this.notificationService.notification$.subscribe((message) => {
      this.snackBar.open(message, "OK", { duration: 5000 });
    });
  }
}
