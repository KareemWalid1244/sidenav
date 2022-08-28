import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../admin/Home/home.component';
import { ItemsComponent } from '../admin/Items/Items.component';
import { ItemsStocksComponent } from '../admin/ItemsStocks/ItemsStocks.component';
import { LogoutComponent } from './logout/logout.component';;
import { stockComponent } from '../admin/Stock/stock.component';
import { AuthComponentsComponent } from './auth-components.component';
import { LoginComponent } from './login/login.component';
import { TypesComponent } from "../admin/Types/types.component";
import { OrdersComponent } from '../admin/orders/orders.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'auth', pathMatch:'full'
  },
  { path: 'auth', component: AuthComponentsComponent, children: [
    {
      path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
      path:'login', component:LoginComponent
    }
  ] },
      { path: "Home", component: HomeComponent },
      { path: "Items", component: ItemsComponent },
      { path: "ItemsStocks", component: ItemsStocksComponent },
      { path: "stock", component: stockComponent },
      { path: "Logout", component: LogoutComponent },
      { path: "Types", component: TypesComponent },
{ path: "Logout", component: LogoutComponent },
{ path: "Orders", component:OrdersComponent }

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthComponentsRoutingModule { }
