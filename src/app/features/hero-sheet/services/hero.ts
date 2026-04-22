import { Item } from './../../level/models/item';
import { Interactible } from '../../level/models/interactible';
import { Tile } from '../../level/models/tile';
import { Inventary } from './../models/inventary';
import { Injectable, signal, computed } from '@angular/core';
import { Monster } from '../../level/models/monster';
import { Heart } from '../../level/models/heart';
import { Coin } from '../../level/models/coin';
import { Chest } from '../../level/models/chest';

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
  heroTurn() {
    this.moves.set(this.dice_result());
    this.allowedDirections();
  }

  // Directions possible pour les boutons
  allowedDirections(): void {
    if (this.dice_result() % 2 == 0) {
      //Résultat pair : le mouvement se fait en vertical ou diagonal
      this.allowedDirection.set([
          false,
          true && this.canWalkThere(1),
          false,
          true && this.canWalkThere(3),
          false,
          true && this.canWalkThere(5),
          false,
          true && this.canWalkThere(7),
          false
        ]);

    } else {
      //Résultat impair : le mouvement se fait en diagonal
      this.allowedDirection.set([
        true && this.canWalkThere(0),
        false,
        true && this.canWalkThere(2),
        false,
        false,
        false,
        true && this.canWalkThere(6),
        false,
        true && this.canWalkThere(8)
      ]);
    }
  }

  // Mouvement du héros
  move(direction: number) {
    this.direction.set(direction);
    this.position.update((currentPosition: number) => {
      return currentPosition + (this.moving.get(direction) ?? 0);
    });
    this.checkEvent();
    this.moves.update((currentNumberOfMoves) => {
      return currentNumberOfMoves - 1;
    });
    if ((this.moves() > 0) && this.canWalkThere(this.direction())) {
      this.move(this.direction());
    } else {
      this.allowedDirections();
    }
  }

  canWalkThere(direction: number): boolean {
    return this.levelContext[(this.position() - 1) + (this.moving.get(direction) ?? 0)].walkable;
  }

  checkEvent(): void {
    const currentTile: Tile = this.levelContext[this.position() - 1];
    if (currentTile.interactible && currentTile.interaction) {
      currentTile.interaction();
    }
  }
}
