import { signal, WritableSignal } from '@angular/core';

import { Tile } from './tile';
import { Interaction } from '../../../shared/services/interaction';

export class Monster implements Tile {
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

  interaction(): Interaction {
    if (!this.dead) {
      console.info('Un monstre de vous attaque !');
      this.kill();
      return {
        heroHit: true,
        health: this._monsterHp,
      };
    }
    return {};
  }

  kill(): void {
    this.dead = true;
    this.source.set('/sprites/monster-dead.png');
    this.interactible = false;
  }
}
