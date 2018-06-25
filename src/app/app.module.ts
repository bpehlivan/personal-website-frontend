import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './beforeLogin/navbar/navbar.component';
import { AboutComponent } from './beforeLogin/about/about.component';
import { HomeComponent } from './beforeLogin/home/home.component';
import { LoginComponent } from './beforeLogin/login/login.component';
import { RegisterComponent } from './beforeLogin/register/register.component';
import { ToDoComponent } from './afterLogin/to-do/to-do.component';
import { DashboardComponent } from './afterLogin/dashboard/dashboard.component';

import { UserService } from './user.service';

const RoutingConf: Route[] = [
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
    path: 'todo',
    component: ToDoComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ToDoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(RoutingConf),
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
