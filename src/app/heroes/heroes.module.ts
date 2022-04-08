import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from '../heroes/pages/home/home.component';
import { AddComponent } from '../heroes/pages/add/add.component';
import { SearchComponent } from '../heroes/pages/search/search.component';
import { HeroeComponent } from '../heroes/pages/heroe/heroe.component';
import { ListComponent } from '../heroes/pages/list/list.component';
import { MaterialModule } from '../material/material.module';
import { HeroeCardComponent } from './components/heroe-card.component';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';


@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroeComponent,
    HeroeCardComponent,
    ListComponent,
    HomeComponent,
    ImagePipe,
    ConfirmComponent,
  ],
  imports: [
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    FormsModule
  ]
})
export class HeroesModule { }
