import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaDetalheService {

  private readonly API = 'https://abitus-api.pjc.mt.gov.br/v1/pessoas'

  constructor(private http: HttpClient) { }

  getDados(id: string): Observable<Pessoa> {
    const url = `${this.API}/${id}`
    return this.http.get<Pessoa>(url)
  }


}
