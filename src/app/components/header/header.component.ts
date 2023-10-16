import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, mergeMap, map } from 'rxjs';
import { City } from 'src/models/city';
import { GetAccomodationsService } from 'src/app/services/get-accomodations.service';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  villes$: Observable<Array<City>>
  userInput: string = ''
  tabCity: string[] = [];

/* Envoi de la variable search qui contient l'input de la ville */
  @Output() search: EventEmitter<string> = new EventEmitter() 

  constructor(private service: GetAccomodationsService){}

  ngOnInit(): void{
      this.villes$ = this.service.getCitiesByName('Nan')
  }

  public onInputChange(search: any): void {
    this.search.emit(search.target.value) /* Envoi la variable search qui contient l'input de la ville */
    this.villes$ = this.service.getCitiesByName(search.target.value) /* Récupère via le service du gouv les noms de toutes les villes */
  }

}

