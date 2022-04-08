import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `
  ]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
  ];

  hero: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }
  
  constructor(private heroesService:HeroesService, 
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private snackBar: MatSnackBar,
              private dialog: MatDialog
            ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('edit')){
      return;
    }
    this.activatedRoute.params.pipe(
      switchMap(
        ({id}) => this.heroesService.getHeroeById(id)
      )
    ).subscribe( h => this.hero=h ) 

  }

  
  save() {
    
     if( this.hero.superhero.trim().length === 0  ) {
       return;
     }
      if ( this.hero.id ) {
       // update
       this.heroesService.updateHero( this.hero )
         .subscribe( h => this.showSnackBar('Hero updated') )
     } else {
       // new
       this.heroesService.addHero( this.hero )
         .subscribe( h =>{
           this.showSnackBar('Hero added');
           this.router.navigate(['/heroes/edit', h.id ]);

         });
     }


  }

  delete() {
    console.log("delete " + this.hero.id!);
    const dialog=this.dialog.open(ConfirmComponent,{
      width: '250px',
      data: this.hero
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if (result)
        {
          this.heroesService.deleteHero(this.hero.id!)
              .subscribe( resp =>{
                this.router.navigate(['/heroes']);
              });
        }
      }
    )
    

    
  }

  showSnackBar(message:string):void{
    this.snackBar.open(message, 'Close',{
      duration: 2500
    });

  }


}
