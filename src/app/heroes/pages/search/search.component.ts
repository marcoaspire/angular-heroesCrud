import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  term:string = '';
  heroes: Heroe[]=[];

  heroSelected:Heroe | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  search(){
    this.heroesService.getSuggestions(this.term.trim())
    .subscribe( h => this.heroes=h)
    console.log();
    
  }
  optionSelected(event:MatAutocompleteSelectedEvent){
    if (!event.option.value){
      console.log("nada");
      this.heroSelected = undefined;
      return;
    }

    const hero:Heroe=event.option.value;
    this.term=hero.superhero;
    this.heroesService.getHeroeById(hero.id!).subscribe(
      hero => this.heroSelected = hero
    );

  }

}
