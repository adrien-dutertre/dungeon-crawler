import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';
import { Interaction } from '../../../shared/services/interaction';

export class Door implements Tile {
  source: WritableSignal<string>;
  interactible: boolean = true;
  walkable: boolean = false;

  constructor() {
    this.source = signal('/sprites/door.png');
  }

  description(): string {
    return 'Porte fermée';
  }
  interaction(): Interaction {
    return {};
  }
}
