import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NftService } from '../services/nft.service';
import { NFT } from '../models/nft.model';




@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog implements OnInit {
  nfts: NFT[] = [];

  constructor(private nftService: NftService) {}

  ngOnInit() {
    this.nfts = this.nftService.getNFTs();
  }
}
