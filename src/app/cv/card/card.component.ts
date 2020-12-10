import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheService } from '../services/embauche.service';
import { Personne } from './../Model/personne';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() personne: Personne = new Personne();
  constructor(
    private router: Router,
    private embaucheService: EmbaucheService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    console.log('in card', this.personne);
  }
  // envoyer vers la page détails de la personne
  goToDetails() {
    this.router.navigate(['cv', this.personne.id]);
  }
  embaucher() {
    if (this.embaucheService.embaucher(this.personne)) {
      this.toaster.success(`${this.personne.firstname} a été ajouté avec succès`);
    } else {
      this.toaster.warning(`${this.personne.firstname} ${this.personne.name} est déjà ajouté dans la liste des personnes embauchées`);
    }

  }
}
