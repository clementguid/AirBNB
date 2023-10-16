import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { GetAccomodationsService } from 'src/app/services/get-accomodations.service';
import { Logement } from 'src/models/Logements';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  cityInput : String

  @Input() search$: BehaviorSubject<string>

  accomodationsFiltered: Array<Logement>

  constructor (private service: GetAccomodationsService, private router: Router){}

  ngOnInit(): void {
    this.search$.subscribe((search) => {
      this.service.getAccomodations().subscribe((accomodations) => {
        
        if (search !== '') {
          
            this.accomodationsFiltered = accomodations.filter((accomodation) => {
             return accomodation.city.name.includes(search)
            })
        } else {
          
          this.accomodationsFiltered = accomodations
        }
      })
    }) /* Récupère les infos des logements correspondants au filtre par ville */
    
  }

  onClick(id : number) { /* Ouvre la page avec les détails lors du clique sur une image et envoi l'id */
    this.router.navigate(['/page-details'], {queryParams : {id}});
  } 

}
