/**
 * Este es un componete creado de forma manual.
 * Componentes personalizados
 * header.component.ts
 * .component es una convencion no es necesario pero ayuda idica que es un componente
 * este componete header nos ayudara poniendo un menubar
 */

//Importa el componente
import{Component} from '@angular/core'

//se importa el decorador
@Component({
  /* El selector es el id que le permite ser cargado desde la pagina index.html.
  Es recomendado que este puesto cmo app- */
  selector: 'app-header',
  /* configuracion del html. Es el codigo de HTML para la pagina, cuando ese pequeño se
  lo puede poner aqui, si es largo se lo debe poner en un archivo aprte */
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
