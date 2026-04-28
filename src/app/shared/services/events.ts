import { computed, effect, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Events {
  events: WritableSignal<any[]> = signal([]);
  modal = computed(() => this.events().length > 0);

  add(newEvent: any): void {
    this.events.update((events) => {
      return [...events, newEvent];
    });
  }

  done(): void {
    this.events.update((events) => {
      return events.shift();
    });
  }
}
