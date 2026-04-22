import { signal, WritableSignal } from "@angular/core";
import { Tile } from "./tile";

export class Heart implements Tile {
  private _heartValue: number | undefined;
  style: WritableSignal<string>;
  walkable: boolean=true;
  looted: boolean=false;
  interactible: boolean = true;

  constructor(value?: number) {
    this.style=signal("life");
    this._heartValue = value;
  }

  description(): string {
    return 'Health potion';
  }

  value(): number | undefined {
    return this._heartValue;
  }

  loot() : void {
    this.looted = true;
    this.style.set('');
  }

  interaction(): void {
    if (!this.looted) {
      console.info("Interaction avec un cœur");
      this.loot();
    }
  }
}
