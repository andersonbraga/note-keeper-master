import { Component } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css'],
})
export class CriarNotaComponent {
  categorias: Categoria[] = [];
  nota: Nota;

  ngOnInit(): void {
    this.MostrarCategorias();
  }
  

  constructor(
    private notaService: NotaService,
    private router: Router,
    private toastService: ToastrService,
    private categoriaService: CategoriaService
              ) {
    this.nota = new Nota('','','success',0,1 );
   
    
  }

  criarNota() {
    this.notaService.criar(this.nota).subscribe((nota) => {
      this.toastService.success(
        `Nota ${nota.titulo} criada com sucesso.`,
        'Sucesso'
      );

      this.router.navigate(['/notas', 'listar']);
    });
  }

  MostrarCategorias(){
    this.categoriaService.selecionarTodos().subscribe((categorias)=>{
      this.categorias = categorias;
      
    })
  }
}
