import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmstrongComponent } from './armstrong/armstrong.component';
import { AtmtransactionComponent } from './atmtransaction/atmtransaction.component';
import { FactoialComponent } from './factoial/factoial.component';
import { InvertedpyramidComponent } from './invertedpyramid/invertedpyramid.component';
import { PrimenumberComponent } from './primenumber/primenumber.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArmstrongComponent,
    AtmtransactionComponent,
    FactoialComponent,
    InvertedpyramidComponent,
    PrimenumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
