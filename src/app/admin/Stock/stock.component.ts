import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class stockComponent implements OnInit {
  Stocksform!: UntypedFormGroup;
  
  onSubmit(){
    let type ={
    name:this.Stocksform.controls['NameC'].value
    }
    this.http.post('https://localhost:44369/api/Stock/AddStock',type )
    .subscribe((result: any)=>{
      console.warn("result",result)
    })
    console.log(this.Stocksform.controls['NameC'].value
    
    )

  }
  constructor(private fb:UntypedFormBuilder, private http:HttpClient) { 

    this.Stocksform  = this.fb.group({
      NameC:['',Validators.required]
     });
  }
  ngOnInit(): void {
  }

}
