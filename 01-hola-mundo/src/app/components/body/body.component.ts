import {Component} from '@angular/core'

@Component({
  selector: 'app-body',
  templateUrl: './body.componet.html'
})
export class BodyComponent {

  mostrar=true;

  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor:'Ben Parker'
  }

  personajes: string []=['Spiderman','Venom','Dr.Octopus']
}


/*  1. creo el componete dentro de la carpeta componets/body
    2. le indico a la app en modules que tengo este cmponete
    3. le debo llamar ami compoente desde codigo html app.component.html*/
