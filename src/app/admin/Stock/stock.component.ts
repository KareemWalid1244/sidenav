import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class stockComponent implements OnInit {
  Stocksform!: UntypedFormGroup;
  arrusr!:any;

  onSubmit(){
    if(this.Stocksform.controls['NameC'].value != ""){
      let type ={
        name:this.Stocksform.controls['NameC'].value
        }
        this.http.post('https://localhost:44369/api/Stock/AddStock',type )
        .subscribe((result: any)=>{
          console.warn("result",result)
          if(result==true)
          {
            alert("Stock name added succedfully")
          }
          else{
            alert("Stock name wasn't added, Please try again")

          }
        })
        console.log(this.Stocksform.controls['NameC'].value
        
        )
    }
    else{
      alert("Please fill in all input boxes")

    }
    

  }
  constructor(private fb:UntypedFormBuilder, private http:HttpClient,private route:Router) { 

    this.Stocksform  = this.fb.group({
      NameC:['',Validators.required]
     });
  }
  ngOnInit(): void {
    if(sessionStorage.getItem('userID') == null || sessionStorage.getItem('userID') == "" || sessionStorage.getItem('userID') == " "){
      this.route.navigate(['/']);
     
    }
    this.arrusr = sessionStorage.getItem('name');
  }
  noti(){
  }
}
