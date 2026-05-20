import { Component, input } from '@angular/core';
import { Item } from './models/item';
import { NgOptimizedImage } from '@angular/common';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-inventory',
  imports: [NgOptimizedImage, Button],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory {
  items = input.required<Item[]>();
}
