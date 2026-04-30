import { Injectable } from '@angular/core';
import { Tile } from '../models/tile';
import { Start } from '../models/start';
import { Wall } from '../models/wall';
import { Monster } from '../models/monster';
import { Chest } from '../models/chest';
import { Coin } from '../models/coin';
import { Heart } from '../models/heart';
import { Exit } from '../models/exit';
import { Trap } from '../models/trap';
import { Floor } from '../models/floor';
import { Key } from '../models/key';
import { Door } from '../models/door';
import { Teleporter } from '../models/teleporter';

@Injectable({
  providedIn: 'root',
})
export class LevelParser {
  private readonly parsingType = new Map([
    ['s', () => new Start()],
    ['w1', () => new Wall(true)],
    ['w2', () => new Wall(false)],
    ['m', () => new Monster()],
    ['m1', () => new Monster(1)],
    ['m2', () => new Monster(2)],
    ['m3', () => new Monster(3)],
    ['m4', () => new Monster(4)],
    ['m5', () => new Monster(5)],
    ['m6', () => new Monster(6)],
    ['m7', () => new Monster(7)],
    ['m8', () => new Monster(8)],
    ['m9', () => new Monster(9)],
    ['l', () => new Chest()],
    ['c', () => new Coin()],
    ['h', () => new Heart()],
    ['h1', () => new Heart(1)],
    ['h2', () => new Heart(2)],
    ['h3', () => new Heart(3)],
    ['h4', () => new Heart(4)],
    ['h5', () => new Heart(5)],
    ['h6', () => new Heart(6)],
    ['e', () => new Exit()],
    ['t', () => new Trap()],
    ['k', () => new Key()],
    ['d', () => new Door()],
    ['x', () => new Teleporter()],
  ]);

  parse(rawLevel: string[]): Tile[] {
    const level: Tile[] = [];
    rawLevel.forEach((tileType: string) => {
      const tile: Tile | undefined = this.parsingType.get(tileType)?.();
      level.push(tile ?? new Floor());
    });
    return level;
  }
}
