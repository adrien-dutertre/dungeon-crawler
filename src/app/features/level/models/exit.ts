import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';
import { Interaction } from '../../../shared/services/interaction';

export class Exit implements Tile {
  source: WritableSignal<string>;
  walkable: boolean = true;
  interactible: boolean = true;

  constructor() {
    this.source = signal('./sprites/exit.png');
  }

  description(): string {
    return 'Sortie';
  }

  interaction(): Interaction {
    console.info('Sortie du niveau.');
    return {
      exit: true,
    };
  }
}
