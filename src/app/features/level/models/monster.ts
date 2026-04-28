import { inject, signal, WritableSignal } from '@angular/core';
import { Hero } from '../../hero-sheet/services/hero';
import { Tile } from './tile';
import { Dice } from '../../../shared/components/dice-modal/services/dice';

export class Monster implements Tile {
  private hero = inject(Hero);
  private dice = inject(Dice);
  private _monsterHp: number | undefined;
  source: WritableSignal<string>;
  walkable: boolean = true;
  interactible: boolean = true;
  dead: boolean = false;

  constructor(monsterHp?: number) {
    this.source = signal('/sprites/monster.png');
    this._monsterHp = monsterHp; //Monster HP
  }

  description(): string {
    return 'Monster';
  }

  value(): number | undefined {
    return this._monsterHp;
  }

  interaction(): void {
    if (!this.dead) {
      console.info('Un monstre de vous attaque !');
      if (this._monsterHp == undefined) {
        this.dice.throw(3);
        this._monsterHp = this.dice.result();
      }
      this.kill();
      this.hero.hit(this._monsterHp);
    }
  }

  kill(): void {
    this.dead = true;
    this.source.set('/sprites/monster-dead.png');
    this.interactible = false;
  }
}
