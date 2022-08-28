import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Items',
  templateUrl: './Items.component.html',
  styleUrls: ['./Items.component.scss']
})
export class ItemsComponent implements OnInit {
  Itemsform!: UntypedFormGroup;
  arr!:any[];
  onSubmit(){
    let type ={
      name:this.Itemsform.controls['name'].value,
      typesID:this.Itemsform.controls['type'].value,
      papersCount:this.Itemsform.controls['papersCount'].value
    }
    console.log(type)
     this.http.post('https://localhost:44369/api/Items/AddItems',type )
     .subscribe((result: any)=>{
     
     })}
     selectedNE = new UntypedFormControl();
     names: string[] = ['Angular', 'Reactjs', 'Vue'];
     selectedIT = new UntypedFormControl();
     Items: string[] = ['Angular', 'Reactjs', 'Vue'];
     
  constructor(private fb:UntypedFormBuilder, private http:HttpClient) {
    this.Itemsform  = this.fb.group({
      name:['',Validators.required],
      type:[0,Validators.required],
      papersCount:['',Validators.required]
     });
   }

  ngOnInit(): void {
    this.loadStocks();
  }
loadStocks(){
  this.http.get('https://localhost:44369/api/Stock/GetAllStock' )
  .subscribe((result: any)=>{
    this.arr = result;
  
  })}
}
