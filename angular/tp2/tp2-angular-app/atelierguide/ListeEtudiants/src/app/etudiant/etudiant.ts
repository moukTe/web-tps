import { Component } from '@angular/core';
import {Student} from './Typestudent' ;
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  imports: [CommonModule,FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
  etudiant: Student = {
    id: 1,
    name: 'Ali',
    lastname: 'Ben Saleh',
    average: 15.5,
    classe: 'L3 Informatique',
    successRate: 0.85,           // 85%
    scholarship: 1500,            // 1500 TND
    birthdate: new Date(2002, 5, 15)  // 15 juin 2002
  };
}
