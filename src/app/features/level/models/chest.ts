import { Interaction } from './../../../shared/services/interaction';
import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';

export class Chest implements Tile {
  private _chestValue: number | undefined;
  source: WritableSignal<string>;
  walkable: boolean = true;
  interactible: boolean = true;
  looted: boolean = false;

  constructor() {
    this.source = signal('/sprites/chest-closed.png');
  }

  description(): string {
    return 'Treasure chest';
  }

  value(): number | undefined {
    return this._chestValue;
  }

  loot(): void {
    this.looted = true;
    this.source.set('/sprites/chest-opened.png');
    this.interactible = false;
  }

  interaction(): Interaction {
    if (!this.looted) {
      console.info('Vous ouvrez un coffre.');
      this.loot();
      return {
        coinLoot: true,
        coins: this._chestValue,
      };
    }
    return {};
  }
}
