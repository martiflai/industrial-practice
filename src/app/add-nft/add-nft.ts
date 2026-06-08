import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NftService } from '../services/nft.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-nft',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-nft.html',
  styleUrl: './add-nft.css',
})
export class AddNft {
  name = '';
  description = '';
  price = 0;
  image = '';
  error = '';

  constructor(private nftService: NftService, private auth: AuthService, private router: Router) {}

  submit() {
    if (!this.name || !this.description || !this.price || !this.image) {
      this.error = 'Please fill in all fields';
      return;
    }
    const user = this.auth.getCurrentUser();
    this.nftService.addNFT({
      id: Date.now(),
      name: this.name,
      description: this.description,
      price: this.price,
      image: this.image,
      author: user.name,
      votes: 0
    });
    this.router.navigate(['/catalog']);
  }
}
