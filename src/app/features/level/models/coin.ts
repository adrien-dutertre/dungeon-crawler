import { Item } from './item';

export class Coin extends Item {
  constructor() {
    super();
    this.value = 1;
    this.style.set("coin");
  }

  override description(): string {
    return 'Coin';
  }

  override loot(): void {
    super.looted = true;
    super.style.set('');
  }
}
