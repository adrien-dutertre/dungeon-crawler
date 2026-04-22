import { WritableSignal } from "@angular/core";

export interface Tile {
    style: WritableSignal<string>;
    interactible: boolean;
    walkable: boolean;
    looted?: boolean;
    dead?: boolean;
    description?(): string;
    value?(): number | undefined;
    interaction?(): void;
    loot?(): void;
}
