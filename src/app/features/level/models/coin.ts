import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';

export class Coin implements Tile {
  private _coinValue: number = 1;
  style: WritableSignal<string>;
  walkable: boolean = true;
  looted: boolean = false;
  interactible: boolean = true;

  constructor() {
    this.style = signal('coin');
  }

  description(): string {
    return 'Coin';
  }

  value(): number | undefined {
    return this._coinValue;
  }

  loot(): void {
    this.looted = true;
    this.style.set('');
  }

  interaction(): void {
    if (!this.looted) {
      console.info('Interaction avec une pièce');
      this.loot();
    }
  }
}
