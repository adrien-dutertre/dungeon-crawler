import { Component } from '@angular/core';
import { Level } from "./features/level/level";
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-root',
  imports: [Level, MessageModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  
}
