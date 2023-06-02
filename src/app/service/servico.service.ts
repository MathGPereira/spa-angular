import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

    private readonly urlAPI = " http://127.0.0.1:4200/cadastrar";

    constructor(private http: HttpClient) { }

    cadastrarNoBancoDeDados(usuario: Usuario): Observable<Usuario> {
        const header = new HttpHeaders();

        header.append("Content-type", "Application/json");
        header.append("mode", "cross-origin");

        return this.http.post<Usuario>(this.urlAPI, usuario, { headers: header });
    }
}
