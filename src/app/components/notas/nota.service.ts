import { Injectable } from '@angular/core';
import { Nota } from './nota';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // App module
})
export class NotaService {
  private API_URL = 'http://localhost:3000/notas?_expand=categoria';
  private API_SelecionaPorID = 'http://localhost:3000/notas/'
  constructor(private http: HttpClient) {}

  criar(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(this.API_URL, nota);
  }

  editar(nota: Nota): Observable<Nota> {
    return this.http.put<Nota>("http://localhost:3000/notas/" + nota.id, nota);
  }

  excluir(nota: Nota): Observable<any> {
    return this.http.delete<Nota>(this.API_SelecionaPorID + nota.id + "?_expand=categoria");
  }

  selecionarPorId(id: number): Observable<Nota> {
    return this.http.get<Nota>(this.API_SelecionaPorID + id + "?_expand=categoria");
  }

  selecionarTodos(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.API_URL);
  }

  selecionarPorCategoria(id: number) {
    return this.http.get<Nota[]>("http://localhost:3000/categorias/" + id + "/notas/?_expand=categoria");
}
}
