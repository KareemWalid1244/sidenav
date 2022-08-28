import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private matDialog: MatDialog ) { }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogBodyComponent, dialogConfig);
  }
 
  ngOnInit(): void {
  }

}