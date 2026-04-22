import { WritableSignal } from '@angular/core';
import { Tile } from './tile';

export interface Interactible extends Tile {
    interaction(): void;
}
