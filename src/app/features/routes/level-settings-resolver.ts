import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GameLogic } from '../../shared/services/game-logic';
import { LevelService } from '../level/services/level.service';

export const levelSettingsResolver: ResolveFn<boolean> = (route, state) => {
  const id: number = Number(route.paramMap.get('id'));
  const levelService = inject(LevelService);
  levelService.floor.set(id);

  const logic = inject(GameLogic);
  logic.init();

  const shopFloor: boolean = levelService.levels[levelService.floor() - 1].shop;
  console.log(shopFloor);

  return shopFloor;
};
