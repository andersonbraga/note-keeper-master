import { Component, Input } from '@angular/core';
import { Nota } from '../nota';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';

// One-way Data Binding

@Component({
  selector: 'app-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.css'],
})
export class CardNotaComponent {
  categoria: Categoria;

  @Input() nota: Nota = {
    
    titulo: 'Lavar o cachorro 🦮',
    conteudo: 'Pegar a toalha > Pegar o Shampoo',
    tema: 'success',
    categoriaId: 1,
    id: 0
  };
  constructor(private categoriaService: CategoriaService) {
    this.CarregarCategoria();
    this.categoria = new Categoria(
      '',
      0,
    );

  
}
CarregarCategoria() {
  this.categoriaService.selecionarPorId(this.nota.categoriaId).subscribe((categoria) => {
    this.categoria = categoria;
  });
}
}

