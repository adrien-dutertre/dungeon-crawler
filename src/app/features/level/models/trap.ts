import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';

export class Trap implements Tile {
  style: WritableSignal<string>;
  walkable: boolean = true;
  interactible: boolean = true;

  constructor() {
    this.style=signal('trap');
  }

  description(): string {
    return 'Piège';
  }

  interaction(): void {
    console.info('Interaction avec un piège');
  }
}
