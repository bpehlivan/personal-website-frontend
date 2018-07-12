import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './beforeLogin/navbar/navbar.component';
import { AboutComponent } from './beforeLogin/about/about.component';
import { HomeComponent } from './beforeLogin/home/home.component';
import { LoginComponent } from './beforeLogin/login/login.component';
import { RegisterComponent } from './beforeLogin/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
