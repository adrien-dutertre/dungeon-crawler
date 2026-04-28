import { Component, inject, linkedSignal } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Dice } from './services/dice';
import { Events } from '../../services/events';

@Component({
  selector: 'app-dice-modal',
  imports: [DialogModule, ButtonModule],
  templateUrl: './dice-modal.html',
  styleUrl: './dice-modal.css',
})
export class DiceModal {
  dice = inject(Dice);
  diceDialogVisible = linkedSignal(() => this.dice.modal());
}
