import { Component,Output,Input,EventEmitter } from '@angular/core';
import {  CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-produit',
  imports: [CurrencyPipe],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {

  @Input() nomProduit: string = '';

  prix: number = 17915 ;
  imageUrl: string='assets/produit.jpg'
  enStock:boolean= true;

  @Output() addToCart = new EventEmitter<string>();

  afficherAlerte() {
    this.addToCart.emit(this.nomProduit);
  }

  toggleStock():void{
    this.enStock=!this.enStock;
  }

}
