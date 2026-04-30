import { WritableSignal } from '@angular/core';
import { Interaction } from '../../../shared/services/interaction';

export interface Tile {
  source: WritableSignal<string>;
  interactible: boolean;
  walkable: boolean;
  looted?: boolean;
  dead?: boolean;
  description?(): string;
  value?(): number | undefined;
  interaction?(): Interaction;
  loot?(): void;
}
