import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etudiant } from './etudiant';

describe('Etudiant', () => {
  let component: Etudiant;
  let fixture: ComponentFixture<Etudiant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etudiant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etudiant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//Test automatique généré pour vérifier que le composant se crée correctement. On peut ajouter des tests pour vérifier que les méthodes et l’affichage fonctionnent comme prévu.