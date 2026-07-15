import { inject, Injectable, signal } from '@angular/core';
import { Items } from '../../shared/services/items';
import { Item } from '../inventory/models/item';
import { Hero } from '../hero-sheet/services/hero';
import { GameLogic } from '../../shared/services/game-logic';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  items = inject(Items).list;
  hero = inject(Hero);
  logic = inject(GameLogic);

  shoppingList = signal<Item[]>(this.shopping());

  // Affichage de la boutique
  shopping(): Item[] {
    const SHOPPING_ITEMS: number = 3;
    const list: Item[] = [];
    const listOrdered: Item[] = this.items.sort(
      (a, b) => b.chance_of_appearing - a.chance_of_appearing,
    );
    while (list.length < SHOPPING_ITEMS) {
      let random: number = Math.floor(Math.random() * this.items.length);

      list.push(listOrdered[random]);
    }
    return list;
  }

  // Shopping interactions
  buy(item: Item): void {
    this.hero.loseCoins(item.price);
    item.bought = true;
    if (!item.directEffect) {
      this.hero.inventory.add(item);
    } else {
      this.logic.resolveEvent(item.interaction);
    }
  }
}
