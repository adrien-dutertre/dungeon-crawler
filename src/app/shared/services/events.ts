import { computed, effect, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Events {
  events: WritableSignal<eventType[]> = signal([]);
  modal = computed(() => this.events().length > 0);

  add(newEvent: eventType): void {
    this.events.update((events) => {
      return [...events, newEvent];
    });
  }

  // done(): void {
  //   this.events.update((events) => {
  //     return events.shift();
  //   });
  // }

  private eventEffect = effect(() => {
    if (this.events.length > 0) {
      console.log('Nouvel évènement:', this.events().toString());
      this.resolveEvent();
    }
  });

  resolveEvent(): void {
    const firstEvent = this.events().shift();
  }
}

type eventType = 'Dice' | 'DiceThreshold' | undefined;
