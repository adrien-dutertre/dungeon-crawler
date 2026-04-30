import { Component, inject } from '@angular/core';
import { PopoverModule } from 'primeng/popover';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Hero } from '../hero-sheet/services/hero';
import { NgOptimizedImage } from '@angular/common';
import { LevelService } from './services/level.service';

@Component({
  selector: 'app-level',
  imports: [PopoverModule, OverlayBadgeModule, NgOptimizedImage],
  templateUrl: './level.html',
  styleUrl: './level.css',
})
export class Level {
  protected level = inject(LevelService);
  protected hero = inject(Hero);
}
