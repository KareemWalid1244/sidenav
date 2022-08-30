import { HttpClient } from '@angular/common/http';
import { Conditional } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Items',
  templateUrl: './Items.component.html',
  styleUrls: ['./Items.component.scss'],
})
export class ItemsComponent implements OnInit {
  Itemsform: FormGroup;
  arr!: any[];
  arrusr!:any;
       
  constructor(fb: FormBuilder, private http: HttpClient, private route:Router) {
    this.Itemsform = fb.group({
      name: ['', Validators.required],
      typeName: [0, Validators.required],
      papersCount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadStocks();
    if(sessionStorage.getItem('userID') == null || sessionStorage.getItem('userID') == "" || sessionStorage.getItem('userID') == " "){
      this.route.navigate(['/']);
     
    }
    this.arrusr  = sessionStorage.getItem('name');
  }

  onSubmit(){

    if(this.Itemsform.controls['name'].value != ""&&  this.Itemsform.controls['typeName'].value != ""&& this.Itemsform.controls['papersCount'].value != ""){
      let type ={
          name:this.Itemsform.controls['name'].value,
          typesID:this.Itemsform.controls['typeName'].value,
          papersCount:this.Itemsform.controls['papersCount'].value
        
        }
        this.http.post('https://localhost:44369/api/Items/AddItems',type )
        .subscribe((result: any)=>{
          console.warn("result",result)
          if(result==true)
          {
            alert("Item details added succedfully")
          }
          else{
            alert("Item details wasn't added, Please try again")

          }
        })
        console.log(this.Itemsform.controls['NameC'].value
        
        )
    }
    else{
      alert("Please fill in all input boxes")

    }
    
    this.Itemsform.reset();

  }

  loadStocks() {
    this.http
      .get('https://localhost:44369/api/Types/GetAllTypes')
      .subscribe((result: any) => {
        this.arr = result;
      });
  }
  noti(){
  }
}
