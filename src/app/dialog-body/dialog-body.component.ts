import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogBodyComponent>,  private route:Router ) { }
  logout(){
    sessionStorage.removeItem('userID');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('empID');
    sessionStorage.removeItem('job');
    this.route.navigate(['/']);
    }
  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
