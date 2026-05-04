import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';
import { Interaction } from '../../../shared/services/interaction';

export class Trap implements Tile {
  source: WritableSignal<string>;
  walkable: boolean = true;
  interactible: boolean = true;

  constructor() {
    this.source = signal('./sprites/trap.png');
  }

  description(): string {
    return 'Piège';
  }

  interaction(): Interaction {
    console.info('Vous êtes tombés dans un piège !');
    return {
      coinLost: true,
      coins: undefined,
      heroStop: true,
    };
  }
}
