import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';

export class Void implements Tile {
  source: WritableSignal<string>;
  interactible: boolean = false;
  walkable: boolean = false;

  constructor() {
    this.source = signal('./sprites/void.png');
  }
}
