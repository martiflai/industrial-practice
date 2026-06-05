import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './join.html',
  styleUrl: './join.css',
})
export class Join {}
