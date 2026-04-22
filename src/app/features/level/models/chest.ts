import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';

export class Chest implements Tile {
  private _chestValue: number | undefined;
  style: WritableSignal<string>;
  walkable: boolean = true;
  interactible: boolean = true;
  looted: boolean = false;

  constructor() {
    this.style = signal('chest-closed');
  }

  description(): string {
    return 'Treasure chest';
  }

  value(): number | undefined {
    return this._chestValue;
  }

  loot(): void {
    this.looted = true;
    this.style.set('chest-opened');
  }

  interaction(): void {
    if (!this.looted) {
      console.info('Interaction avec un coffre');
      this.loot();
    }
  }
}
