import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../heroes/pages/list/list.component';
import { AddComponent } from '../heroes/pages/add/add.component';
import { SearchComponent } from '../heroes/pages/search/search.component';
import { HeroeComponent } from '../heroes/pages/heroe/heroe.component';
import { HomeComponent } from '../heroes/pages/home/home.component';

const routes:Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      {
        path:'list',
        component:ListComponent
      },
      {
        path: 'add',
        component:AddComponent
      },
      {
        path: 'edit/:id',
        component: AddComponent
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
  

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
