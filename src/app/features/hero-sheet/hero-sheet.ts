import { Component, signal, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { Hero } from './services/hero';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-hero-sheet',
  imports: [ButtonModule, DividerModule, ScrollPanelModule, DrawerModule, DialogModule],
  templateUrl: './hero-sheet.html',
  styleUrl: './hero-sheet.css',
})
export class HeroSheet {
  hero = inject(Hero);

  inventaryVisibility: boolean = false;

  diceDialogVisible: boolean = false;

  move(): void {
    this.throwDice();
    this.hero.heroTurn();
  }
  
  throwDice(): void {
    this.diceDialogVisible = true;
    this.hero.random();
  }
}
