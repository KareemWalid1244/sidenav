import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BodyComponent } from "./Body/body.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { HomeComponent } from "./Home/home.component";
import { ItemsComponent } from "./Items/Items.component";
import { ItemsStocksComponent } from "./ItemsStocks/ItemsStocks.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FooterComponent } from "./footer/footer.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "../admin/admin.component";
import { stockComponent } from "./Stock/stock.component";
import { TypesComponent } from "../admin/Types/types.component";
import { LogoutComponent } from "../auth-components/logout/logout.component";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "../auth-components/login/login.component";
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'
import {MatIconModule} from '@angular/material/icon';
import { OrdersComponent } from "./orders/orders.component";
import {MatTableModule} from '@angular/material/table';
import { NorderComponent } from './norder/norder.component';1
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectSearchModule } from 'mat-select-search';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatDialogModule} from "@angular/material/dialog";
import { UserDialogComponentComponent } from './user-dialog-component/user-dialog-component.component';
import { StatisticsComponent } from './statistics/statistics.component';




@NgModule({
  declarations: [
    BodyComponent,
    SidenavComponent,
    HomeComponent,
    ItemsComponent,
    ItemsStocksComponent,
    OrdersComponent,
    AdminComponent,
    FooterComponent,
    stockComponent,
    LogoutComponent,
    HeaderComponent,
    TypesComponent,
    NorderComponent,
    UserDialogComponentComponent,
    StatisticsComponent,
    

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSelectSearchModule,
    NgxMatSelectSearchModule,
    MatDialogModule,
  ],
  providers: [],
})
export class AdminModule {}