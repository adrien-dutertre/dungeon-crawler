import { Component, inject, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { HeroSheet } from '../hero-sheet/hero-sheet';
import { InventoryService } from '../inventory/models/inventory-service';
import { Item } from '../inventory/models/item';
import { NgOptimizedImage } from '@angular/common';
import { Hero } from '../hero-sheet/services/hero';
import { GameLogic } from '../../shared/services/game-logic';

@Component({
  selector: 'app-shop',
  imports: [Button, HeroSheet, NgOptimizedImage],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  inventoryService = inject(InventoryService);
  hero = inject(Hero);
  logic = inject(GameLogic);
  items = signal<Item[]>(this.inventoryService.list);

  buy(item: Item): void {
    item.bought = true;
    this.logic.resolveEvent(item.interaction);
  }
}
