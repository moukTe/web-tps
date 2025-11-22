import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.html',
  styleUrls: ['./produits.css'],
   imports: [CommonModule, FormsModule]
})
export class Produits {
  produits = [
    { nom: 'CatFood', stock: 60 },
    { nom: 'DogFood', stock: 35 },
    { nom: 'CatToy', stock: 10 }
  ];

  augmenterStock(produit: any) {
    produit.stock += 5;
  }
}