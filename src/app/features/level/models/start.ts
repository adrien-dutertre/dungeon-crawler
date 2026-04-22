import { signal, WritableSignal } from "@angular/core";
import { Tile } from "./tile";

export class Start implements Tile {
  style: WritableSignal<string>;
  walkable: boolean = true;
  interactible: boolean = false;

  constructor() {
    this.style= signal("start");
  }

}