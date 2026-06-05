import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { CommonModule } from '@angular/common';
import { Home } from './home/home';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, CommonModule, RouterOutlet, RouterLink, Home], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
