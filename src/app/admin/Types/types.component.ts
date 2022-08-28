import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  Typesform!: UntypedFormGroup;


  onSubmit(){
    let type ={
    name:this.Typesform.controls['NameC'].value
    }
    this.http.post('https://localhost:44369/api/Types/AddTypes',type )
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.log(this.Typesform.controls['NameC'].value
    
    )

  }
  constructor(private fb:UntypedFormBuilder, private http:HttpClient) { 

    this.Typesform  = this.fb.group({
      NameC:['',Validators.required]
     });
  }

 
  ngOnInit(): void {
  }

}
