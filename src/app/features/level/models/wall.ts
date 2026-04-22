import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';

export class Wall implements Tile {
    style: WritableSignal<string>;
    walkable: boolean = false;
    interactible: boolean = false;

  constructor(hardWall: boolean) {
    this.style= signal(hardWall ? "wall1" : "wall2");
    this.walkable = false;
  }
}
