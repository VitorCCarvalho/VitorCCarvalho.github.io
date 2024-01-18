import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaPessoaService {

  private readonly API = 'https://abitus-api.pjc.mt.gov.br/v1/pessoas/aberto/filtro?status=DESAPARECIDO&porPagina=9999'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API)
  }

  

}
