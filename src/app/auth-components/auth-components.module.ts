import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponentsRoutingModule } from './auth-components-routing.module';
import { AuthComponentsComponent } from './auth-components.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';






@NgModule({
  declarations: [
    AuthComponentsComponent,
    LoginComponent
  
  ],
  imports: [
    CommonModule,
    AuthComponentsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,  


  ]
})
export class AuthComponentsModule { }
