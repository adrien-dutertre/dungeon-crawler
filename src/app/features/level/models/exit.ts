import { inject, signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';
import { ConfirmationService } from 'primeng/api';
import { GameLogic } from '../../../shared/services/game-logic';

export class Exit implements Tile {
  source: WritableSignal<string>;
  walkable: boolean = true;
  interactible: boolean = true;
  private confirmationService = inject(ConfirmationService);
  // private logic = inject(GameLogic);

  constructor() {
    this.source = signal('/sprites/exit.png');
  }

  description(): string {
    return 'Sortie';
  }

  interaction(): void {
    console.info('Sortie du niveau.');
    this.confirmationService.confirm({
      message: 'Voulez-vous quitter le niveau ?',
      header: 'Fin du niveau',
      rejectLabel: 'Non, rester',
      acceptLabel: 'Oui, quitter',
      accept: () => {
        //this.logic;
      },
    });
  }
}
