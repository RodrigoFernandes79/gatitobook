
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng-lts/messages';
import { MessageModule } from 'primeng-lts/message';
import { ToastModule } from 'primeng-lts/toast';
import { MensagenComponent } from './componentes/mensagen/mensagen.component';


@NgModule({
  declarations: [
    AppComponent,
    MensagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MessagesModule,
		MessageModule,
		ToastModule







  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
