import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private endPoint: string = environment.endPoint;
  constructor( private http: HttpClient) { }

  //FETCH API
  // getHeroes():Promise<Heroe[]>{
  //   return fetch(`${this.endPoint}/heroes`)
  //   .then(response => response.json())
  //   ;
  // }

  //angular solution XMLHttpRequest
  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endPoint}/heroes`);
  }
  
  getHeroeById(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.endPoint}/heroes/${id}`);
  }

  getSuggestions(term:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endPoint}/heroes?q=${term}&_limit=6`);
  }

  addHero(h:Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.endPoint}/heroes`, h);

  }

  
  updateHero(h:Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`${this.endPoint}/heroes/${h.id}`, h);
  }

  deleteHero(id: string):Observable<any>{
    return this.http.delete<any>(`${this.endPoint}/heroes/${id}`);
  }


}
