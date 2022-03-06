import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-popup',
  templateUrl: './welcome-popup.component.html',
  styleUrls: ['./welcome-popup.component.scss']
})
export class WelcomePopupComponent {

  userName: string = '';
  constructor(
    public dialogRef: MatDialogRef<WelcomePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  saveUserName() {
    console.log("user: ", this.userName)
    this.dialogRef.close();
  }
}
