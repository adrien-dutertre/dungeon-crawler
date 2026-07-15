import { InventoryService } from '../../inventory/models/inventory-service';
import { Injectable, signal, computed, inject, linkedSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hero {
  inventory = inject(InventoryService);
  current_level: number = 1;

  current_hp = signal<number>(10);
  MAX_HP = signal<number>(10);

  current_coins = signal<number>(30);

  modifyer_coins: number = 1;
  modifyer_attack: number = 0;
  modifyer_defense: number = 0;

  position = signal<number>(0);
  private readonly top = computed(() => {
    return (this.position() - 1) % 15;
  });
  private readonly left = computed(() => {
    return Math.floor((this.position() - 1) / 15);
  });
  readonly calculatedPosition = computed(() => {
    return {
      top: 'calc((' + this.left() + '/15)*100%)',
      left: 'calc((' + this.top() + '/15)*100%)',
    };
  });

  moves = signal<number>(0);

  init(level: number, hp: number, maxHp: number, coins: number, position: number): void {
    this.current_level = level;
    this.position.set(position);
    this.current_hp.set(hp);
    this.MAX_HP.set(maxHp);
    this.current_coins.set(coins);
  }

  // Mouvement du héros
  move(newPosition: number) {
    this.position.set(newPosition);
  }

  // Prendre des dégâts
  hit(damages: number): void {
    this.current_hp.update((currentHp) => {
      return currentHp - damages;
    });
  }

  // Se soigner
  heal(health: number): void {
    this.current_hp.update((currentHp) => {
      return currentHp + health;
    });
  }

  // Perdre des pièces
  loseCoins(coins_lost: number): void {
    this.current_coins.update((currentCoins) => {
      return currentCoins - coins_lost;
    });
  }

  // Gagner des pièces
  getCoins(coins_gained: number): void {
    this.current_coins.update((currentCoins) => {
      return currentCoins + coins_gained;
    });
  }

  // Réinitialisation du héros
  reset(): void {
    this.current_level = 1;
    this.MAX_HP.set(10);
    this.current_hp.set(this.MAX_HP());
    this.current_coins.set(0);
  }

  // Augmenter la vie MAX
  endurance(): void {
    this.MAX_HP.update((current_MAX_HP) => current_MAX_HP++);
  }
}
