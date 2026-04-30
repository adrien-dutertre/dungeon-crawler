import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';
import { Interaction } from '../../../shared/services/interaction';

export class Key implements Tile {
  source: WritableSignal<string>;
  interactible: boolean = true;
  walkable: boolean = true;
  looted?: boolean = false;

  constructor() {
    this.source = signal('/sprites/key.png');
  }

  description(): string {
    return 'Clé';
  }

  interaction(): Interaction {
    if (!this.looted) {
      this.loot();
      console.info('Vous avez récupéré une clé');
      return {
        key: true,
      };
    }
    return {};
  }

  loot(): void {
    this.looted == true;
    this.source.set('/sprites/floor.png');
    this.interactible = false;
  }
}
