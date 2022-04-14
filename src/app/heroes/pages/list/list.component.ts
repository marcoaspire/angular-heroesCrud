import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../heroes/services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
    `
      mat-card{
        margin-top:15px;
      }
    `
  ]
})
export class ListComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
    //Observable
      this.heroesService.getHeroes().subscribe(resp =>{
       this.heroes=resp;
      });

    //promise fetch
    // this.heroesService.getHeroes()
    // .then(data =>
    //   this.heroes=data 
    // );
  }

  

}
