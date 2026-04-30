import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';
import { Interaction } from '../../../shared/services/interaction';

export class Heart implements Tile {
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

  interaction(): Interaction {
    if (!this.looted) {
      console.info('Vous trouvez une potion de vie !');
      this.loot();
      return {
        heroHeal: true,
        health: this._heartValue,
      };
    }
    return {};
  }
}
