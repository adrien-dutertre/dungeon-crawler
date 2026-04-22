import { Tile } from './tile';

export abstract class Interactible extends Tile {
    abstract interaction(): void;
}
