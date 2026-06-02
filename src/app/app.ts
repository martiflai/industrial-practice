import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, CommonModule, RouterOutlet, RouterLink], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('itproger');
}
