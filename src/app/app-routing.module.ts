import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
{
  path: '', redirectTo:'auth', pathMatch:'full'
}
,
  {
    path: "auth",
    loadChildren: () =>
      import("./auth-components/auth-components.module").then(
        (m) => m.AuthComponentsModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
