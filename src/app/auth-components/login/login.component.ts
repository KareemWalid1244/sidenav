import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup | any;
  title = 'material-login';

  constructor(
    private router:Router
  ) {
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new UntypedFormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    localStorage.setItem('user',this.loginForm.value)
    this.router.navigate(['/home'])
  }
}

