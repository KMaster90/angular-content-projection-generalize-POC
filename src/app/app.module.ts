import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BtnComponent } from './btn/btn.component';
import { FancyBtnComponent } from './fancy-btn/fancy-btn.component';
import { RouterModule, Routes } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { CardComponent } from './card/card.component';

export const appRoutes: Routes   = [
  { path: 'example1', component: Example1Component },
  { path: 'example2', component: Example2Component },
  { path: '', redirectTo: 'example1', pathMatch: 'full' },
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, BtnComponent, FancyBtnComponent, Example1Component, Example2Component, CardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
