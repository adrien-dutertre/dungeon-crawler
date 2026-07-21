import { Component, input } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Level } from '../level/level';
import { HeroSheet } from '../hero-sheet/hero-sheet';
import { Shop } from '../shop/shop';

@Component({
  selector: 'app-game',
  imports: [Navbar, Level, HeroSheet, Shop],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  shopFloor = input.required<boolean>();
}
