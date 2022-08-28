import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { stockComponent } from "../admin/Stock/stock.component";
import { TypesComponent } from "../admin/Types/types.component";
import { HomeComponent } from "../admin/Home/home.component";
import { ItemsComponent } from "../admin/Items/Items.component";
import { LogoutComponent } from "../auth-components/logout/logout.component";
import { ItemsStocksComponent } from "../admin/ItemsStocks/ItemsStocks.component";
import { AdminComponent } from "./admin.component";
import { HeaderComponent } from "../header/header.component";
import { LoginComponent } from "../auth-components/login/login.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "admin",
    pathMatch: "full",
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "admin",
        pathMatch: "full",
      },
      { path: "Home", component: HomeComponent },
      { path: "Items", component: ItemsComponent },
      { path: "ItemsStocks", component: ItemsStocksComponent },
      { path: "stock", component: stockComponent },
      { path: "Types", component: TypesComponent },
      { path: "Logout", component: LogoutComponent },
      { path: "Header", component: HeaderComponent },
      { path: "Logout", component: LogoutComponent },

     
    ],
  },
  { path: "Login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
