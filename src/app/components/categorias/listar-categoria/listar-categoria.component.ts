import { Component } from '@angular/core';
import { Categoria } from '../categoria';
import { ActivatedRoute } from '@angular/router';
import { NotaService } from '../../notas/nota.service';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent {
  categorias: Categoria[] = [];

  constructor(private route: ActivatedRoute, private notaService: NotaService, private categoriaService: CategoriaService) {

  }


  ngOnInit(): void {

    this.categoriaService.selecionarTodos().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }



}