/**
 * Esto se genero mediante el comando "ng generate component components/footer"
 *   - se genero component.tst
 *   - component.html
 *   - component.spec.ts(se elimina)
 *   - component.css
 * **/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  anio: number;
  constructor(){
    this.anio = new Date().getFullYear();
  }

}
