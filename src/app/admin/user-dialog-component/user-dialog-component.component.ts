import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {startWith} from 'rxjs/operators';
import { ServService } from '../norder/srv.service';

@Component({
  selector: 'app-user-dialog-component',
  templateUrl: './user-dialog-component.component.html',
  styleUrls: ['./user-dialog-component.component.scss']
})
export class UserDialogComponentComponent implements OnInit {
  options = ["Sam", "Varun", "Jasmine"];

  filteredOptions : any; 
  formGroup: FormGroup = this.fb.group({
    user : []
  })
  myControl = new FormControl('');

  constructor( public dialogRef: MatDialogRef<UserDialogComponentComponent>, private service : ServService, private fb : FormBuilder ) { }
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.initForm();
    this.getNames();
  }
  
  initForm(){
    this.formGroup.get('user')!.valueChanges.subscribe((response: string) => {
      this.filterData(response);
    })
  }

  filterData(enteredData: string){
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames(){
    this.service.getData().subscribe(response => {
      this.options = response;
      this.filteredOptions = response;
    })
  }
  close() {
    this.dialogRef.close();
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}
}
