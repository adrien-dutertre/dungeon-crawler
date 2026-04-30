import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';
import { Interaction } from '../../../shared/services/interaction';

export class Teleporter implements Tile {
  source: WritableSignal<string>;
  interactible: boolean = true;
  walkable: boolean = true;

  constructor() {
    this.source = signal('/sprites/teleporter.png');
  }
  description?(): string {
    return 'Téléporteur';
  }
  interaction(): Interaction {
    return {};
  }
}
