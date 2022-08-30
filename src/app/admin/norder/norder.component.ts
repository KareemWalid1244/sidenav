import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NorderModel } from '../Models/norders.model';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { UserDialogComponentComponent } from '../user-dialog-component/user-dialog-component.component';
import { ServService } from './srv.service';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-norder',
  templateUrl: './norder.component.html',
  styleUrls: ['./norder.component.scss']
})
export class NorderComponent implements OnInit {

  filteredOptions!: any[];

  usertemp:any;
  formGroup! : FormGroup;
  Norderform!: FormGroup;
  arrstc!:any[];
  user = new FormControl('');
  options = ["Sam", "Varun", "Jasmine"];
  arrusr!:any[];
  arrtyp!:any[];
  arrussr!:any;

  arritm!:any[];
  onSubmit(){

    this.arrusr.forEach(element => {


      if(element.name == this.filteredOptions[0])
      {
        this.usertemp=element.userID;
        console.log("zoo",this.usertemp);
      }
    })

    if(this.Norderform.controls['stock'].value && this.Norderform.controls['item'].value && this.usertemp && this.Norderform.controls['count'].value != ""){
      let type ={
        stockID:this.Norderform.controls['stock'].value,
        itemsID:this.Norderform.controls['item'].value,
        userID:this.usertemp,
        count:this.Norderform.controls['count'].value
    
        }
        this.http.post('https://localhost:44369/api/Order/AddOrder',type )
        .subscribe((result: any)=>{
          console.warn("result",result)
          if(result==true)
          {
            alert("Order placed succedfully")
          }
          else{
            alert("Order wasn't placed, Please try again")

          }
        })
      
    }
    else{
      alert("Please fill in all input boxes")

    }
    
    this.Norderform.reset();

  }


  constructor(private route:Router, private fb:FormBuilder, private http:HttpClient, public dialog: MatDialog,  private service : ServService ) {
    
    this.Norderform  = this.fb.group({
    stock:['0',Validators.required],
    item:['0',Validators.required],
    user:['',Validators.required],
    count:['',Validators.required]
   }); }

  
  ngOnInit() {
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
  initForm(){
    this.formGroup = this.fb.group({
      'user' : ['']
    })
    this.formGroup.get('user')!.valueChanges.subscribe(response => {
      console.log('data is ', response);
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
    console.log("barbor");
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
