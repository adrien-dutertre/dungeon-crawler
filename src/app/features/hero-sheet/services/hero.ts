import { Tile } from '../../level/models/tile';
import { Inventary } from './../models/inventary';
import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hero {
  current_level: number = 1;

  current_hp = signal(10);
  MAX_HP = signal(10);
  
  current_coin = signal(0);

  position = signal(47);

  dice_result = signal(0);

  direction = signal(0);
  /*
    Directions :
    0: up left
    1: up
    2: up right
    3: left
    4: none
    5: right
    6: down left
    7: down
    8: down right
  */
  private readonly moving = new Map([
    [0, -16],
    [1, -15],
    [2, -14],
    [3, -1],
    [5, 1],
    [6, 14],
    [7, 15],
    [8, 16]
  ]);

  allowedDirection = signal<boolean[]>([]);

  moves = signal(0);

  inventary = signal<Inventary[]>([]);

  levelContext : Tile[] = [];

  random() : void {
    const diceThrow: number = Math.floor(Math.random() * 6) + 1;
    this.dice_result.set(diceThrow);
  }

  // Action de mouvement
  moveHero() {
    this.moves.set(this.dice_result());
    
  }

  // Directions possible pour les boutons
  allowedDirections(): void {
    if (this.dice_result() % 2 == 0) {
      //Résultat pair : le mouvement se fait en vertical ou diagonal
      this.allowedDirection.set([false, true, false, true, false, true, false, true, false]);
    } else {
      //Résultat impair : le mouvement se fait en diagonal
      this.allowedDirection.set([true, false, true, false, false, false, true, false, true]);
    }
  }

  move(direction: number) {
    this.direction.set(direction);
    this.position.update((currentPosition: number) => {
      return currentPosition + (this.moving.get(direction) ?? 0) * this.moves();
    });
    this.moves.set(0);
  }

  canWalkThere(): boolean {
    return this.levelContext[this.position() + (this.moving.get(this.direction()) ?? 0)].canBeVisited;
  }
}
