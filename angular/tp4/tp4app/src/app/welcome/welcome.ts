import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  imports: [FormsModule,CommonModule],
  standalone: true,
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  isLoggedIn: boolean = false;
  username: string = '';
  myName: string = 'Mouk';
  errorMessage: string = '';

  toggleLogin() {
    if (this.username === this.myName) {
      this.isLoggedIn = !this.isLoggedIn;
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Prénom incorrect. Essayez encore !';
      this.isLoggedIn = false;
    }
  }
}
