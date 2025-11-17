import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilComponent } from './profil/profil';
import { AdresseComponent } from './adresse/adresse.component';  // Import ajouté


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfilComponent,AdresseComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'my-app';
}