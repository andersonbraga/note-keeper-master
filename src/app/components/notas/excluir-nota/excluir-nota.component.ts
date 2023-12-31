import { Component, OnInit } from '@angular/core';
import { NotaService } from '../nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from '../nota';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css'],
})
export class ExcluirNotaComponent implements OnInit {
  nota: Nota;

  constructor(
    private notaService: NotaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService
  ) {
    this.nota = new Nota('','','success',0,1 ); 
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.notaService.selecionarPorId(id).subscribe((nota: Nota) => {
      this.nota = nota;
    });
  }

  excluirNota() {
    this.notaService.excluir(this.nota).subscribe(() => {
      this.toastService.success('Nota excluída com sucesso.', 'Sucesso');

      this.router.navigate(['/notas', 'listar']);
    });
  }
}
