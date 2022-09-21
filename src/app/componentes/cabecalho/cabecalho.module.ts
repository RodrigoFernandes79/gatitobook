import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';
import {MenubarModule} from 'primeng-lts/menubar';
import {CardModule} from 'primeng-lts/card';

@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule, RouterModule,MenubarModule,CardModule
  ],
	exports:[CabecalhoComponent]
})
export class CabecalhoModule { }
