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
    ["s", new Start()],
    ["w1", new Wall(true)],
    ["w2", new Wall(false)],
    ["m", new Monster()],
    ["lt", new Chest()],
    ["lc", new Coin()],
    ["ll", new Heart()],
    ["e", new Exit()],
    ["t", new Trap()],
    /*["k", new Key()],
    ["d", new Door()],
    ["c", new Teleporter()]*/
  ]);

  parse(rawLevel: string[]): Tile[] {
    const level: Tile[] = [];
    rawLevel.forEach((tileType: string, index: number) => {
      const tile: Tile = this.parsingType.get(tileType) ?? new Floor();
      level.push(tile);
    });
    return level;
  }
}
