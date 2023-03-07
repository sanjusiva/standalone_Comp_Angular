import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";

export const ADMIN_ROUTES: Route[] = [
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'home'
    // },
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UserComponent}
  ];
