import { HeroSheet } from './features/hero-sheet/hero-sheet';
import { Component } from '@angular/core';
import { Level } from "./features/level/level";
import { MessageModule } from 'primeng/message';
import { Navbar } from "./shared/components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Level, MessageModule, Navbar, HeroSheet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  
}
