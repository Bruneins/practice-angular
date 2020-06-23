/**
 * En este archivo le indicamos a Angular que componetes, servicios tiene
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Importacion de nuestro componente importado manualmente
import {HeaderComponent} from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    /* Lo tenemos declarado como componete de la aplicacion pero no va a aparecer porque no le
     indicamos donde va aparecer */
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
