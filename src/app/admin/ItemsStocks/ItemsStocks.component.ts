import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ItemsStocks',
  templateUrl: './ItemsStocks.component.html',
  styleUrls: ['./ItemsStocks.component.scss']
})
export class ItemsStocksComponent implements OnInit {
  ItemsStocksform!: UntypedFormGroup;
  arrstc!:any[];
  arritm!:any[];
  onSubmit(){
    let type ={
    Stock:this.ItemsStocksform.controls['Stock'].value,
    Item:this.ItemsStocksform.controls['Item'].value,
    OrderNo:this.ItemsStocksform.controls['OrderNo'].value
    }
    console.log(type)
     this.http.post('https://localhost:44369/api/ItemsStock/AddItemsStock',type )
     .subscribe((result: any)=>{
       console.warn("result",result)
     })

  }
  selectedST = new UntypedFormControl();
  Stocks: string[] = ['Angular', 'Reactjs', 'Vue'];
  selectedIT = new UntypedFormControl();
  Items: string[] = ['Angular', 'Reactjs', 'Vue'];
  
  constructor(private fb:UntypedFormBuilder, private http:HttpClient) { 

    this.ItemsStocksform  = this.fb.group({
      Stock:['0',Validators.required],
      Item:['0',Validators.required],
      OrderNo:['',Validators.required]
     });
  }

  ngOnInit(): void {
    this.loadStocks();
    this.loadItems();
  }
loadStocks(){
  this.http.get('https://localhost:44369/api/Stock/GetAllStock' )
  .subscribe((result: any)=>{
    this.arrstc = result;
  
  })};

  loadItems(){
    this.http.get('https://localhost:44369/api/Items/GetAllItems' )
    .subscribe((result: any)=>{
      this.arritm = result;
    console.log(this.arritm)
    })}
}
