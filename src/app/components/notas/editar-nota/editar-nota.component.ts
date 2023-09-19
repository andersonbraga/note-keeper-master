import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from '../nota.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css'],
})
export class EditarNotaComponent implements OnInit {
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

  editarNota() {
    this.notaService.editar(this.nota).subscribe((nota: Nota) => {
      this.toastService.success(
        `Nota "${nota.titulo}" editada com sucesso.`,
        'Sucesso'
      );

      this.router.navigate(['/notas', 'listar']);
    });
  }
}
