import { Component, Input } from '@angular/core';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  @Input() categoria: Categoria = {
    id: 1,
    titulo: '',

  }
}