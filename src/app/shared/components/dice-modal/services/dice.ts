import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Dice {
  result = signal<number>(0);

  modal = signal<boolean>(false);
  modalTitle = signal<string>('');

  private readonly titles = new Map([
    [0, 'Dé de déplacement'],
    [1, 'Dé de quantité de trésor'],
    [2, 'Dé de quantité de vie récupérée'],
    [3, 'Dé de force ennemi'],
    [4, 'Dé de piège'],
  ]);

  // Fonction aléatoire de lancement de dé 6
  private random(): void {
    const diceResult: number = Math.floor(Math.random() * 6) + 1;
    this.result.set(diceResult);
  }

  // Lancer de dé
  throw(titleNumber: number): void {
    this.modalTitle.set(this.titles.get(titleNumber) ?? 'Titre');
    this.modal.set(true);
    this.random();
  }

  // Fermer la modale
  closeModal(): void {
    this.modal.set(false);
  }
}
