import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ItemsStocks',
  templateUrl: './ItemsStocks.component.html',
  styleUrls: ['./ItemsStocks.component.scss']
})
export class ItemsStocksComponent implements OnInit {
  ItemsStocksform!: UntypedFormGroup;
  arrstc!:any[];
  arrusr!:any;

  arritm!:any[];
  onSubmit(){
    if(this.ItemsStocksform.controls['Stock'].value && this.ItemsStocksform.controls['Item'].value && this.ItemsStocksform.controls['balance'].value != ""){
      let type ={
        stockID:this.ItemsStocksform.controls['Stock'].value,
        itemsID:this.ItemsStocksform.controls['Item'].value,
        balance:this.ItemsStocksform.controls['balance'].value
        }
        this.http.post('https://localhost:44369/api/ItemsStock/AddItemsStock',type )
        .subscribe((result: any)=>{
          console.warn("result",result)
          if(result==true)
          {
            alert("Items Stock details added succedfully")
          }
          else{
            alert("Items Stock details wasn't added, Please try again")

          }
        })
      
    }
    else{
      alert("Please fill in all input boxes")

    }
    

  }
  selectedST = new UntypedFormControl();
  Stocks: string[] = ['Angular', 'Reactjs', 'Vue'];
  selectedIT = new UntypedFormControl();
  Items: string[] = ['Angular', 'Reactjs', 'Vue'];
  
  constructor(private route:Router, private fb:UntypedFormBuilder, private http:HttpClient) { 

    this.ItemsStocksform  = this.fb.group({
      Stock:['0',Validators.required],
      Item:['0',Validators.required],
      balance:['',Validators.required]
     });
  }

  ngOnInit(): void {
    this.loadStocks();
    this.loadItems();
    if(sessionStorage.getItem('userID') == null || sessionStorage.getItem('userID') == "" || sessionStorage.getItem('userID') == " "){
      this.route.navigate(['/']);
     
    }
    this.arrusr = sessionStorage.getItem('name');
    
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
    })};
    noti(){
      alert("Item stock details added succedfully")
    }
}
