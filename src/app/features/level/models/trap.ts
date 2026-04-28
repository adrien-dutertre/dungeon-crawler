import { inject, signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';
import { Hero } from '../../hero-sheet/services/hero';
import { Dice } from '../../../shared/components/dice-modal/services/dice';

export class Trap implements Tile {
  private hero = inject(Hero);
  private dice = inject(Dice);
  source: WritableSignal<string>;
  walkable: boolean = true;
  interactible: boolean = true;

  constructor() {
    this.source = signal('/sprites/trap.png');
  }

  description(): string {
    return 'Piège';
  }

  interaction(): void {
    console.info('Vous êtes tombés dans un piège !');
    this.hero.moves.set(0);
    this.dice.throw(4);
    this.hero.loseCoins(this.dice.result());
  }
}
