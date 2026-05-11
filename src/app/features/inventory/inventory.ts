import { Component, input } from '@angular/core';
import { Item } from './models/item';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-inventory',
  imports: [NgOptimizedImage],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory {
  items = input.required<Item[]>();
}
