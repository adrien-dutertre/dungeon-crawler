import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';

export class Wall implements Tile {
  source: WritableSignal<string>;
  walkable: boolean = false;
  interactible: boolean = false;

  constructor(hardWall: boolean) {
    this.source = signal(hardWall ? '/sprites/wall-1.png' : '/sprites/wall-2.png');
    this.walkable = false;
  }
}
