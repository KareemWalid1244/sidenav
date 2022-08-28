import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { OrderModel } from '../Models/orders.model';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NorderModel } from '../Models/norders.model';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { UserDialogComponentComponent } from '../user-dialog-component/user-dialog-component.component'
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
 import { ServService } from '../norder/srv.service';
import { Router } from '@angular/router';
var ELEMENT_DATA: OrderModel[] = [];

/**
 * @title Basic use of `<table mat-table>`
 */


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  filteredOptions!: any[];

  usertemp:any;
  formGroup! : FormGroup;
  Norderform!: FormGroup;
  arrstc!:any[];
  user = new FormControl('');
  options = ["Sam", "Varun", "Jasmine"];
  arrusr!:any[];
  arrussr!:any;

  arrtyp!:any[];
  orders!:any[];
  arritm!:any[];
  onSubmit(){
    this.arrusr.forEach(element => {


      if(element.name == this.filteredOptions[0])
      {
        this.usertemp=element.userID;
        console.log("zoo",this.usertemp);
      }
    })}
  OrderModel : OrderModel[] =[];
  public dataSource  =  new MatTableDataSource<OrderModel>();
  constructor(private route:Router, private fb:FormBuilder, private http:HttpClient, public dialog: MatDialog,  private service : ServService ) { }

  displayedColumns: string[] = ['userName', 'actionDate', 'stockName', 'itemName', 'count'];
  

  ngOnInit(): void {
    if(sessionStorage.getItem('userID') == null || sessionStorage.getItem('userID') == "" || sessionStorage.getItem('userID') == " "){
      this.route.navigate(['/']);
     
    }
    this.arrussr = sessionStorage.getItem('name');
    this.initForm();
    this.getNames();
    this.loadStocks();
    this.loadUsers();
    this.loadType();
  }
  loadTableByUserID(x:any) {
    this.http
      .get(`https://localhost:44369/api/Order/GetAllOrderByUserID/${x}`)
      .subscribe((result: any) => {
        this.dataSource.data = result;
        console.log(this.dataSource.data)
      }); 
}
 

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    initForm(){
      this.formGroup = this.fb.group({
        'user' : ['']
      })
      this.formGroup.get('user')!.valueChanges.subscribe(response => {
        this.arrusr.forEach(element => {
          if(element.name == this.filteredOptions[0])
          {
            this.usertemp=element.userID;
            console.log("zoo",this.usertemp);
          this.loadTableByUserID(this.usertemp);
          }
        })
        // console.log('data is ', response);
        this.filterData(response);
      })
    }
  
    filterData(enteredData : any){
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
  
  
   
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
    noti(){
    }
    loadItems(x:any) {
      this.http
        .get(`https://localhost:44369/api/Items/GetItemsByTypeID/${x}`)
        .subscribe((result: any) => {
          this.arritm = result;
        }); 
  }
  
  loadStocks() {
    this.http
      .get('https://localhost:44369/api/Stock/GetAllStock')
      .subscribe((result: any) => {
        this.arrstc = result;
      })};
  
      loadUsers() {
        this.http
          .get('https://localhost:44369/api/User/GetAllUsers')
          .subscribe((result: any) => {
            this.arrusr = result;
            console.log(this.arrusr);
          });
          
    };
  
    loadType() {
      this.http
        .get('https://localhost:44369/api/Types/GetAllTypes')
        .subscribe((result: any) => {
          this.arrtyp = result;
        });
        
  }

}
