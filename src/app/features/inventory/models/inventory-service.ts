import { Injectable, signal } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  current = signal<Item[]>([]);

  add(item: Item): void {
    this.current.update((list) => [...list, item]);
  }

  delete(index: number): void {
    this.current.update((list) => {
      return list.splice(index, 1);
    });
  }
}
