import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Hero } from '../../features/hero-sheet/services/hero';
import { Dice } from '../components/dice-modal/services/dice';
import { Tile } from '../../features/level/models/tile';
import { LevelService } from '../../features/level/services/level.service';
import { Events } from './events';

@Injectable({
  providedIn: 'root',
})
export class GameLogic {
  private hero = inject(Hero);
  private dice = inject(Dice);
  private level = inject(LevelService);

  private cardinal_movement = signal<boolean>(true);

  direction = signal<number>(0);
  private readonly moving = new Map([
    [0, -16], // up left
    [1, -15], // up
    [2, -14], // up right
    [3, -1], // left
    [4, 0], // none
    [5, 1], // right
    [6, 14], // down left
    [7, 15], // down
    [8, 16], // down right
  ]);

  allowedDirection = computed<boolean[]>(() => {
    return this.cardinal_movement()
      ? [
          false,
          true && this.canWalkThere(1),
          false,
          true && this.canWalkThere(3),
          false,
          true && this.canWalkThere(5),
          false,
          true && this.canWalkThere(7),
          false,
        ]
      : [
          true && this.canWalkThere(0),
          false,
          true && this.canWalkThere(2),
          false,
          false,
          false,
          true && this.canWalkThere(6),
          false,
          true && this.canWalkThere(8),
        ];
  });

  // Initier un tour
  startTurn(): void {
    this.dice.throw(0);
    this.cardinal_movement.set(this.dice.result() % 2 == 0);
    this.hero.moves.set(this.isMovable() ? this.dice.result() : 0);
  }

  // Bouger le héros dans cette direction
  chooseDirection(direction: number): void {
    this.direction.set(direction);
    this.turn();
  }

  // Tour du joueur
  turn(): void {
    while (this.hero.moves() > 0 && this.canWalkThere(this.direction())) {
      if (!this.dice.modal()) {
        this.move();
        this.checkEvent();
      } else {
        return;
      }
    }
  }

  // Mouvement du joueur
  move(): void {
    const newPosition: number = this.hero.position() + (this.moving.get(this.direction()) ?? 0);
    this.hero.move(newPosition);
    this.hero.moves.update((currentNumberOfMoves) => {
      return currentNumberOfMoves - 1;
    });
  }

  // Le joueur peut bouger dans au moins une direction
  isMovable(): boolean {
    return this.allowedDirection().some((direction) => direction == true);
  }

  // Est-ce que le joueur peut se déplacer sur la case ?
  canWalkThere(direction: number): boolean {
    return this.level.context()[this.hero.position() - 1 + (this.moving.get(direction) ?? 0)]
      .walkable;
  }

  // Evènement sur la case
  checkEvent(): void {
    const currentTile: Tile = this.level.context()[this.hero.position() - 1];
    if (currentTile.interactible && currentTile.interaction) {
      currentTile.interaction();
    }
  }
}
