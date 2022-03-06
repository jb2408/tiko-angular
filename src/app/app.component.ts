import { Component, OnInit } from '@angular/core';
import { WelcomePopupComponent } from './features/features/welcome-popup/welcome-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tiko-angular';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openWelcomePopup();
  }

  openWelcomePopup() {
    const dialogRef = this.dialog.open(WelcomePopupComponent, {
      maxWidth: '90vw',
      disableClose: true,
      data: {
        hello: "jezu."
      },
    });
  }
}
