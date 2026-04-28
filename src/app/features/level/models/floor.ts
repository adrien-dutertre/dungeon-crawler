import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';

export class Floor implements Tile {
  source: WritableSignal<string>;
  walkable: boolean = true;
  interactible: boolean = false;

  constructor() {
    this.source = signal('/sprites/floor.png');
  }
}
