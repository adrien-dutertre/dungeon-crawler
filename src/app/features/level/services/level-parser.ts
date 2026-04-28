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

@Injectable({
  providedIn: 'root',
})
export class LevelParser {
  private readonly parsingType = new Map([
    ["s", () => new Start()],
    ["w1", () => new Wall(true)],
    ["w2", () => new Wall(false)],
    ["m", () => new Monster()],
    ["m1", () => new Monster(1)],
    ["m2", () => new Monster(2)],
    ["m3", () => new Monster(3)],
    ["m4", () => new Monster(4)],
    ["m5", () => new Monster(5)],
    ["m6", () => new Monster(6)],
    ["lt", () => new Chest()],
    ["lc", () => new Coin()],
    ["ll", () => new Heart()],
    ["ll1", () => new Heart(1)],
    ["ll2", () => new Heart(2)],
    ["ll3", () => new Heart(3)],
    ["ll4", () => new Heart(4)],
    ["ll5", () => new Heart(5)],
    ["ll6", () => new Heart(6)],
    ["e", () => new Exit()],
    ["t", () => new Trap()],
    /*["k", () => new Key()],
    ["d", () => new Door()],
    ["c", () => new Teleporter()]*/
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
