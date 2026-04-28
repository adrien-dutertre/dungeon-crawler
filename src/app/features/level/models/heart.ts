import { inject, signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';
import { Hero } from '../../hero-sheet/services/hero';
import { Dice } from '../../../shared/components/dice-modal/services/dice';

export class Heart implements Tile {
  private hero = inject(Hero);
  private dice = inject(Dice);
  private _heartValue: number | undefined;
  source: WritableSignal<string>;
  walkable: boolean = true;
  looted: boolean = false;
  interactible: boolean = true;

  constructor(value?: number) {
    this.source = signal('/sprites/life.png');
    this._heartValue = value;
  }

  description(): string {
    return 'Health potion';
  }

  value(): number | undefined {
    return this._heartValue;
  }

  loot(): void {
    this.looted = true;
    this.source.set('/sprites/floor.png');
    this.interactible = false;
  }

  interaction(): void {
    if (!this.looted) {
      console.info('Vous trouvez une potion de vie !');
      if (this._heartValue == undefined) {
        this.dice.throw(2);
        this._heartValue = this.dice.result();
      }
      this.loot();
      this.hero.heal(this._heartValue);
    }
  }
}
