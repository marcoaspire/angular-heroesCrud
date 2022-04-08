import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes:Routes =[
    //lazy load, the system will load only if it is necessary
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule)
    },
    {
        path: 'heroes',
        loadChildren: function () { 
           return import('./heroes/heroes.module').then(m => m.HeroesModule)
        },
         canLoad: [AuthGuard],
         canActivate:[AuthGuard]
    },
    {
        path: '404',
        component: ErrorPageComponent
    },
    {
        path: '**',
        //component: ErrorPageComponent
        redirectTo: '404'
    }
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}