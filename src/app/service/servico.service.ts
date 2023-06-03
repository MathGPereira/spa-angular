import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

    private readonly urlAPICadastrar = "http://127.0.0.1:5000/cadastrar";
    private readonly urlAPITrocarSenha = "http://127.0.0.1:5000/trocarSenha";

    constructor(private http: HttpClient) { }

    cadastrarNoBancoDeDados(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.urlAPICadastrar, usuario);
    }

    trocarSenhaNoBancoDeDados(info: object): Observable<object> {
        return this.http.put<object>(this.urlAPITrocarSenha, info);
    }
}
