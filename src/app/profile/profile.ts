import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NftService } from '../services/nft.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  user: any;
  boughtNFTs: any[] = [];

  constructor(private auth: AuthService, private nftService: NftService) {}

  ngOnInit() {
    this.user = this.auth.getCurrentUser();
    const purchases = JSON.parse(localStorage.getItem('purchases') || '{}');
    const ids = purchases[this.user?.email] || [];
    this.boughtNFTs = ids.map((id: number) => this.nftService.getNFTById(id)).filter(Boolean);
  }

  logout() {
    this.auth.logout();
    window.location.href = '/home';
  }
}
