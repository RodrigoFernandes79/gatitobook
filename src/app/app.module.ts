import { RodapeModule } from './componentes/rodape/rodape.module';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng-lts/messages';
import { MessageModule } from 'primeng-lts/message';
import { ToastModule } from 'primeng-lts/toast';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MessagesModule,
		MessageModule,
		ToastModule,
		CabecalhoModule,
		RodapeModule







  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
