import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GameLogic } from '../../shared/services/game-logic';
import { LevelService } from '../level/services/level.service';

export const levelSettingsResolver: ResolveFn<boolean> = (route, state) => {
  const id: number = Number(route.paramMap.get('id'));
  const level = inject(LevelService);
  level.floor.set(id);
  const logic = inject(GameLogic);
  logic.init();
  return true;
};
