import { Interactible } from './interactible';

export class Exit extends Interactible {
  constructor() {
    super();
    this.style.set('exit');
  }

  override description(): string {
    return 'Sortie';
  }

  interaction(): void {
    console.info("Interaction avec la sortie");
  }
}
