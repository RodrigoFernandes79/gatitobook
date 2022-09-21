import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape.component';
import {CardModule} from 'primeng-lts/card';



@NgModule({
  declarations: [
    RodapeComponent
  ],
  imports: [
    CommonModule, RouterModule,CardModule
  ],
	exports:[RodapeComponent]
})
export class RodapeModule { }
