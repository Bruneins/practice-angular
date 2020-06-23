import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.sevice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(  private _heroesServices: HeroesService,
                private activatedRoute: ActivatedRoute,
                private router:Router) {
  }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes =  this._heroesServices.buscarHeroes(params['termino'])
    });
     console.log(this.heroes);
  }

  verHeroe( idx: number ){
    this.router.navigate(['/heroe', idx]);
  }

}
