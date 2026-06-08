import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NftService } from '../services/nft.service';
import { AuthService } from '../services/auth.service';
import { NFT } from '../models/nft.model';

@Component({
  selector: 'app-nft-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './nft-detail.html',
  styleUrl: './nft-detail.css',
})
export class NftDetail implements OnInit {
  nft: NFT | undefined;
  comments: any[] = [];
  newComment = '';
  isLoggedIn = false;
  currentUser: any;
  voted = false;
  bought = false;

  constructor(
    private route: ActivatedRoute,
    private nftService: NftService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.nft = this.nftService.getNFTById(id);
    this.isLoggedIn = this.auth.isLoggedIn();
    this.currentUser = this.auth.getCurrentUser();
    this.loadComments(id);
    if (this.isLoggedIn) {
      this.voted = this.nftService.hasVoted(id, this.currentUser.email);
      this.bought = this.nftService.hasBought(id, this.currentUser.email);
    }
  }

  loadComments(id: number) {
    const all = JSON.parse(localStorage.getItem('comments') || '{}');
    this.comments = all[id] || [];
  }

  addComment() {
    if (!this.newComment.trim()) return;
    const id = this.nft!.id;
    const all = JSON.parse(localStorage.getItem('comments') || '{}');
    if (!all[id]) all[id] = [];
    all[id].push({ author: this.currentUser.name, text: this.newComment });
    localStorage.setItem('comments', JSON.stringify(all));
    this.comments = all[id];
    this.newComment = '';
  }

  vote() {
    if (!this.isLoggedIn) return;
    this.nftService.vote(this.nft!.id, this.currentUser.email);
    this.voted = !this.voted;
    this.nft = this.nftService.getNFTById(this.nft!.id);
  }

  buy() {
    if (!this.isLoggedIn) return;
    this.nftService.buyNFT(this.nft!.id, this.currentUser.email);
    this.bought = true;
  }
}
