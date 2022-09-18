import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from 'primeng-lts/password';
import {ToastModule} from 'primeng-lts/toast';

import {InputTextModule} from 'primeng-lts/inputtext';
import {ImageModule} from 'primeng-lts/image';
import {ButtonModule} from 'primeng-lts/button';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NovoUsuarioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
	 InputTextModule,
	 ImageModule,
	 ButtonModule,
	 ToastModule,
	 FormsModule,
	 PasswordModule,
	 ReactiveFormsModule




  ],
	exports:[HomeComponent]
})
export class HomeModule { }
