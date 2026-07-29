import { Routes } from '@angular/router';
import { levelSettingsResolver } from './features/routes/level-settings-resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'level/:id',
    loadComponent: () => import('./features/game/game').then((m) => m.Game),
    resolve: {
      shopFloor: levelSettingsResolver,
    },
  },
];
