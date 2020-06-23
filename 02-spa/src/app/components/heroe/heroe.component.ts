import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.sevice';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }
}
