import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Level } from '../level/level';
import { HeroSheet } from '../hero-sheet/hero-sheet';

@Component({
  selector: 'app-game',
  imports: [Navbar, Level, HeroSheet],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {}
