import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../Models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup ;
  title = 'material-login';
  strUser : User[] = [];

  constructor(
    private router:Router,
    private http:HttpClient,
    private fb:FormBuilder
  ) {

    this.loginForm =this.fb.group({
      name: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    })
   }

  ngOnInit(): void {
  }
  login(username: any,password: any){
    this.http.get(`https://localhost:44369/api/User/LoginUser/${username}/${password}` )
    .subscribe((result: any)=>{
      console.log();
    })};
  
    onSubmit(){
      var username=this.loginForm.controls['name'].value;
      var password=this.loginForm.controls['password'].value;
      this.http.get(`https://localhost:44369/api/User/LoginUser/${username}/${password}` )
      .subscribe((result: any)=>{
        this.strUser = result;
        if(result.empID != null){
        this.router.navigate(['/admin/admin/Home']);
        sessionStorage.setItem('userID', result.userID);
        sessionStorage.setItem('name', result.name);
        sessionStorage.setItem('empID', result.empID);
        sessionStorage.setItem('job', result.job);
           }
        else{
              alert(result.name); 
            }

      //     if(!this.loginForm.valid){
          
      //   this.router.navigate(['/home'])
      //  return console.log(this.loginForm.value);
      // }
      // else{
      // }
      // localStorage.setItem('user',this.loginForm.value)
      })};
    
  }

