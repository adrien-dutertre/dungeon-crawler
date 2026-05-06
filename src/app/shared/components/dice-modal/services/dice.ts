import { Injectable, signal } from '@angular/core';
import { DiceModalConfig } from './dice-modal-config';

@Injectable({
  providedIn: 'root',
})
export class Dice {
  result = signal<number>(0);

  modal = signal<boolean>(false);
  modalTitle: string = 'Titre';
  modalMessage: string | undefined = 'Message';
  modalButtonLabel: string = 'Label';

  // Fonction aléatoire de lancement de dé 6
  private random(): void {
    const diceResult: number = Math.floor(Math.random() * 6) + 1;
    this.result.set(diceResult);
  }

  // Lancer de dé
  throw(config: DiceModalConfig): void {
    this.modalTitle = config.title;
    this.modalMessage = config.message;
    this.modalButtonLabel = config.buttonLabel;
    this.modal.set(true);
    this.random();
  }

  // Fermer la modale
  closeModal(): void {
    this.modal.set(false);
  }
}
