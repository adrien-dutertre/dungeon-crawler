import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { Hero } from './services/hero';
import { DiceModal } from '../../shared/components/dice-modal/dice-modal';
import { GameLogic } from '../../shared/services/game-logic';
import { ConfirmDialog } from '../../shared/components/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-hero-sheet',
  imports: [ButtonModule, DividerModule, ScrollPanelModule, DrawerModule, DiceModal, ConfirmDialog],
  templateUrl: './hero-sheet.html',
  styleUrl: './hero-sheet.css',
})
export class HeroSheet {
  hero = inject(Hero);
  logic = inject(GameLogic);

  inventaryVisibility: boolean = false;
}
