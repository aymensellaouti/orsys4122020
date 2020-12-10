import { Injectable } from '@angular/core';
import { Personne } from '../Model/personne';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embauchees: Personne[] = [];
  constructor() {}

  embaucher(personneEmbauche: Personne): boolean {
    if (this.embauchees.indexOf(personneEmbauche) === -1) {
      this.embauchees.push(personneEmbauche);
      return true;
    }
    return false;
  }

  getEmbauchees(): Personne[] {
    return this.embauchees;
  }
}
