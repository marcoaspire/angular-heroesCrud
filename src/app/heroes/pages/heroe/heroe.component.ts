import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      width: 100%
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe !: Heroe;
  constructor(
    private activateRouted: ActivatedRoute,
    private heroesService:HeroesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activateRouted.params.pipe(
        switchMap(({id}) => this.heroesService.getHeroeById(id) )
      ).subscribe( h => this.heroe=h)
    ;
  }
  back(){
    this.router.navigate(['/heroes/list']);
  }
  
}
