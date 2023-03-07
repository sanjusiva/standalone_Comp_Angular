import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ProductComponent } from "./product/product.component";

export const APP_ROUTES: Routes = [
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component')
            .then(m => m.LoginComponent)
    },
    {
        path: 'admin', loadChildren: () => import('./admin/admin-routing')
            .then(mod => mod.ADMIN_ROUTES)
    },
];
