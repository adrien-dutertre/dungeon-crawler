import { WritableSignal } from '@angular/core';
import { Interactible } from './interactible';

export interface Item extends Interactible {
  looted: boolean;
  loot(): void;
}
