import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';
import { Interaction } from '../../../shared/services/interaction';

export class Coin implements Tile {
  private _coinValue: number = 1;
  source: WritableSignal<string>;
  walkable: boolean = true;
  looted: boolean = false;
  interactible: boolean = true;

  constructor() {
    this.source = signal('/sprites/coins.png');
  }

  description(): string {
    return 'Coin';
  }

  value(): number | undefined {
    return this._coinValue;
  }

  loot(): void {
    this.looted = true;
    this.source.set('/sprites/floor.png');
    this.interactible = false;
  }

  interaction(): Interaction {
    if (!this.looted) {
      console.info('Vous trouvez une pièce !');
      this.loot();
      return {
        coinLoot: true,
        coins: this._coinValue,
      };
    }
    return {};
  }
}
