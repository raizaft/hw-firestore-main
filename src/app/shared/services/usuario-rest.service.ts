import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioRestService {
  URL_USUARIOS = 'http://localhost:3000/usuarios';
  constructor(private httpClient: HttpClient) {}

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);
  }

  remover(usuario: Usuario): Observable<any> {
    return this.httpClient.delete(`${this.URL_USUARIOS}/${usuario.id}`);
  }

  listar(): Observable<Usuario[]> {
    console.log('Fazendo requisição para listar usuários');
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }

  buscar(id: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(
      `${this.URL_USUARIOS}/${usuario.id}`,
      usuario
    );
  }
}
