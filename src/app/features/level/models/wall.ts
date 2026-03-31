import { Decor } from './decor';

export class Wall extends Decor {
  constructor(walkable: boolean) {
    super();
    this.style.set(walkable ? "wall2" : "wall1");
  }
}
