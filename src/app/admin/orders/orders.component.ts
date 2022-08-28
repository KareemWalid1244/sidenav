import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from '../Models/orders.model';
import { Router } from '@angular/router';


var ELEMENT_DATA: OrderModel[] = [];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {
  OrderModel : OrderModel[] =[];
  public dataSource  =  new MatTableDataSource<OrderModel>();
  arrusr!:any;

  constructor(private route:Router, private http:HttpClient) { }
  
  displayedColumns: string[] = ['userName', 'date', 'stockName', 'itemName', 'count'];
  
 ngOnInit(): void {
  if(sessionStorage.getItem('userID') == null || sessionStorage.getItem('userID') == "" || sessionStorage.getItem('userID') == " "){
    this.route.navigate(['/']);
   
  }
  this.arrusr = sessionStorage.getItem('name');
  
  this.http.get('https://localhost:44369/api/Order/GetAllOrder')
    .subscribe((result : any)=>{
        this.dataSource.data = result;
        console.log(this.dataSource.data);
        })
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
