import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Navbar, Button, RouterLink, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
