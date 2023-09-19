import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCategoriaComponent } from './criar-categoria.component';

describe('CriarCategoriaComponent', () => {
  let component: CriarCategoriaComponent;
  let fixture: ComponentFixture<CriarCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarCategoriaComponent]
    });
    fixture = TestBed.createComponent(CriarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
