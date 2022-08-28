import { Component } from "@angular/core";
import { Subscriber } from "rxjs";
import { GetApiService }  from './get-api.service'
import { Inject } from "@angular/core";
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from "./dialog-body/dialog-body.component";
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Ink System";
constructor(private api: GetApiService, private matDialog: MatDialog ){};
openDialog() {
  const dialogConfig = new MatDialogConfig();
  this.matDialog.open(DialogBodyComponent, dialogConfig);
}
ngOnInit(){
  this.api.apiCall().subscribe((data) => {
  })
}
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
