import { Interactible } from './interactible';

export abstract class Item extends Interactible {
  private _looted: boolean = false;

  loot() {}

  get looted(): boolean {
    return this._looted;
  }

  set looted(status: boolean) {
    this._looted = status;
  }
}
