import { signal, WritableSignal } from '@angular/core';
import { Tile } from './tile';

export class Exit implements Tile {
  walkable: boolean = true;
  style: WritableSignal<string>;
  interactible: boolean = true;

  constructor() {
    this.style = signal('exit');
  }

  description(): string {
    return 'Sortie';
  }

  interaction(): void {
    console.info('Interaction avec la sortie');
  }
}
