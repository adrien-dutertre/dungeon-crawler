import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Navbar, Button, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
