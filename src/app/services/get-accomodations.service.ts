import { Injectable } from '@angular/core';
import { Logement } from 'src/models/Logements';
import { City } from 'src/models/city';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GetAccomodationsService {
  private url = 'http://localhost:3000/accommodations ';


  constructor(private http: HttpClient) { }

  /* Récupère l'ensemble des logements et les stocke dans un tab de logements */
  getAccomodations(){
    return this.http.get<Array<Logement>>(this.url);
  }

  /* Je n'ai pas eu le temps d'implémenter cette méthode mais elle était déstinée à rechercher les logements par ID sur la bdd afin de ne pas recharger tous les logements lorsqu'on ouvre la page détaillée d'un logement */
  getCitiesByName(city: String) : Observable<Array<City>>{
    return this.http.get<Array<City>>(`https://geo.api.gouv.fr/communes?nom=${city}`);
  }
}
