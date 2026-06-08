import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NFT } from '../models/nft.model';
import { NFTS } from '../data/nfts.data';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getNFTs(): NFT[] {
    if (!this.isBrowser()) return NFTS;
    const stored = localStorage.getItem('nfts');
    if (!stored) {
      localStorage.setItem('nfts', JSON.stringify(NFTS));
      return NFTS;
    }
    return JSON.parse(stored);
  }

  getNFTById(id: number): NFT | undefined {
    return this.getNFTs().find(n => n.id === id);
  }

  addNFT(nft: NFT): void {
    if (!this.isBrowser()) return;
    const nfts = this.getNFTs();
    nfts.push(nft);
    localStorage.setItem('nfts', JSON.stringify(nfts));
  }

  vote(nftId: number, userEmail: string): void {
    if (!this.isBrowser()) return;
    const nfts = this.getNFTs();
    const nft = nfts.find(n => n.id === nftId);
    if (!nft) return;

    const votes = JSON.parse(localStorage.getItem('votes') || '{}');
    if (votes[userEmail]?.includes(nftId)) {
      votes[userEmail] = votes[userEmail].filter((id: number) => id !== nftId);
      nft.votes--;
    } else {
      if (!votes[userEmail]) votes[userEmail] = [];
      votes[userEmail].push(nftId);
      nft.votes++;
    }

    localStorage.setItem('votes', JSON.stringify(votes));
    localStorage.setItem('nfts', JSON.stringify(nfts));
  }

  hasVoted(nftId: number, userEmail: string): boolean {
    if (!this.isBrowser()) return false;
    const votes = JSON.parse(localStorage.getItem('votes') || '{}');
    return votes[userEmail]?.includes(nftId) || false;
  }

  buyNFT(nftId: number, userEmail: string): void {
    if (!this.isBrowser()) return;
    const purchases = JSON.parse(localStorage.getItem('purchases') || '{}');
    if (!purchases[userEmail]) purchases[userEmail] = [];
    if (!purchases[userEmail].includes(nftId)) {
      purchases[userEmail].push(nftId);
    }
    localStorage.setItem('purchases', JSON.stringify(purchases));
  }

  hasBought(nftId: number, userEmail: string): boolean {
    if (!this.isBrowser()) return false;
    const purchases = JSON.parse(localStorage.getItem('purchases') || '{}');
    return purchases[userEmail]?.includes(nftId) || false;
  }
}