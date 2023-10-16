import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetAccomodationsService } from 'src/app/services/get-accomodations.service';
import { Logement } from 'src/models/Logements';
import { City } from 'src/models/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  accomodation$ : Observable <Array<Logement>>
  search$: BehaviorSubject<string> = new BehaviorSubject("")
  villes$ : Observable <Array<City>>

  constructor(private service: GetAccomodationsService){}

  ngOnInit(): void {
    this.search$.next("")
    // this.accomodation$ = this.service.getAccomodations()
    // this.villes$ = this.service.getCitiesByName('Nan')
  }

  public onSearch(search: string): void { /* Lorsque la saisie change, récupère le string et la renvoi au composant card via le html */
    this.search$.next(search); 
  }

}



