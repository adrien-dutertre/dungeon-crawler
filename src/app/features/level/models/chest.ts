import { Item } from './item';

export class Chest extends Item {

  constructor(value?: number) {
    super();
    this.value = value;
    this.style.set('chest-closed');
  }

  override description(): string {
    return 'Treasure chest';
  }

  override loot(): void {
    super.looted = true;
    super.style.set('chest-opened');
  }

  interaction(): void {
    console.info("Interaction avec un coffre");
  }
}
