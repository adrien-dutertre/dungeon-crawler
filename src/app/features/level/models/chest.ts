import { inject, signal, WritableSignal, computed, effect } from '@angular/core';
import { Tile } from './tile';
import { Hero } from '../../hero-sheet/services/hero';
import { Dice } from '../../../shared/components/dice-modal/services/dice';

export class Chest implements Tile {
  private hero = inject(Hero);
  private dice = inject(Dice);
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

  interaction(): void {
    if (!this.looted) {
      console.info('Vous ouvrez un coffre.');
      this.dice.throw(1);
      this._chestValue = this.dice.result();
      this.loot();
      this.hero.getCoins(this._chestValue);
    }
  }
}
