import { Component, OnInit } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  isLoggedIn = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }
}
