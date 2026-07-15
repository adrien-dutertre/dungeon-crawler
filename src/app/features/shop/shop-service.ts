import { inject, Injectable } from '@angular/core';
import { Items } from '../../shared/services/items';
import { Item } from '../inventory/models/item';
import { Hero } from '../hero-sheet/services/hero';
import { GameLogic } from '../../shared/services/game-logic';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  list = inject(Items).list;
  hero = inject(Hero);
  logic = inject(GameLogic);

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
