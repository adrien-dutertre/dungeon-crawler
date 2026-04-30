import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Game } from './features/game/game';
import { levelSettingsResolver } from './features/routes/level-settings-resolver';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'level/:id',
    component: Game,
    resolve: {
      settings: levelSettingsResolver,
    },
  },
];
