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

@Injectable({
  providedIn: 'root',
})
export class LevelParser {
  private readonly parsingType = new Map([
    ["s", new Start()],
    ["w1", new Wall(false)],
    ["w2", new Wall(true)],
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
      const tile: Tile = this.parsingType.get(tileType) ?? new Tile();
      tile.position = index;
      level.push(tile);
    });
    return level;
  }
}
