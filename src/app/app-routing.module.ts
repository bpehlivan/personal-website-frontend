import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './beforeLogin/navbar/navbar.component';
import { AboutComponent } from './beforeLogin/about/about.component';
import { HomeComponent } from './beforeLogin/home/home.component';
import { LoginComponent } from './beforeLogin/login/login.component';
import { RegisterComponent } from './beforeLogin/register/register.component';
import { AuthGuard } from './auth-guard.service';
const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]

    },
    {
        path: 'fittrack',
        canActivate: [AuthGuard],
        loadChildren: 'app/afterlogin/afterlogin.module#AfterloginModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
