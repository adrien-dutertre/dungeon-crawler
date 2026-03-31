import { Item } from "./item";

export class Heart extends Item {

  constructor(value?: number) {
    super();
    this.value = value;
    this.style.set("life");
  }

  override description(): string {
    return 'Health potion';
  }

  override loot() : void {
    super.looted = true;
    super.style.set('');
  }
}
