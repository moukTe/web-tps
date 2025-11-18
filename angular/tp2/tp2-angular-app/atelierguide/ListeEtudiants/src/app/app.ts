import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Etudiant } from './etudiant/etudiant';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Etudiant],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent {
title = 'MyClass Will be Angular Heroes';
myname: string = 'Melek';

}

