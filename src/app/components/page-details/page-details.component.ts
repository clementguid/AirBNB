import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GetAccomodationsService } from 'src/app/services/get-accomodations.service';
import { Logement } from 'src/models/Logements';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss'],
})
export class PageDetailsComponent {
  id_recue: number;
  accomodation$: Observable<Array<Logement>>;
  accomodation: Logement;

  constructor(
    private route: ActivatedRoute,
    private service: GetAccomodationsService
  ) {
      /* Récupère l'id envoyé par le header */
      this.route.queryParams.subscribe((params) => { 
      this.id_recue = params['id'];
    });

    /* Récupère l'ensemble des logements puis les trie par id */
    this.service.getAccomodations().subscribe((accomodations) => {
      const accomodation = accomodations.find(
        (accomodation) => accomodation.id == this.id_recue
      );
      if (accomodation) {
        this.accomodation = accomodation;
      }
    });
  }
}
