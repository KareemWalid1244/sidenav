import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  Typesform!: UntypedFormGroup;

  arrusr!:any;


  onSubmit(){
    if(this.Typesform.controls['NameC'].value != ""){
      let type ={
        name:this.Typesform.controls['NameC'].value
        }
        this.http.post('https://localhost:44369/api/Types/AddTypes',type )
        .subscribe((result: any)=>{
          console.warn("result",result)
          if(result==true)
          {
            alert("Type name added succedfully")
          }
          else{
            alert("Type name wasn't added, Please try again")

          }
        })
        console.log(this.Typesform.controls['NameC'].value
        
        )
    }
    else{
      alert("Please fill in all input boxes")

    }
    

  }
  constructor(private route:Router, private fb:UntypedFormBuilder, private http:HttpClient) { 

    this.Typesform  = this.fb.group({
      NameC:['',Validators.required]
     });
  }

 
  ngOnInit(): void {
    if(sessionStorage.getItem('userID') == null || sessionStorage.getItem('userID') == "" || sessionStorage.getItem('userID') == " "){
      this.route.navigate(['/']);
     
    }
    this.arrusr = sessionStorage.getItem('name');
  }

}
