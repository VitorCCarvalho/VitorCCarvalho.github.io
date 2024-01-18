import { OcorrenciaEntrevDesapDTO } from './../ocorrenciaEntrevDesapDTO';
import { UltimaOcorrencia } from './../ultimaOcorrencia';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';
import { PessoaDetalheService } from '../pessoaDetalhe.service'

import {MatListModule} from '@angular/material/list';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pessoa-detalhe',
  standalone: true,
  imports: [MatListModule, DatePipe],
  templateUrl: './pessoa-detalhe.component.html',
  styleUrl: './pessoa-detalhe.component.css'
})
export class PessoaDetalheComponent {
  id: string | null
  pessoa : Pessoa | any
  ultOco: UltimaOcorrencia | any
  entrev: OcorrenciaEntrevDesapDTO | any

  dtDesaparecimento : Date | any


  imgNotAvailable = '/notAvailable.jpg'
  constructor(private service: PessoaDetalheService, private route: ActivatedRoute){
    this.id = this.route.snapshot.queryParamMap.get('id')
    if(this.id != null){
      this.service.getDados(this.id).subscribe((pessoa) => {
        this.pessoa = pessoa
        this.ultOco = pessoa.ultimaOcorrencia
        this.dtDesaparecimento = this.ultOco.dtDesaparecimento
        this.entrev = this.ultOco.ocorrenciaEntrevDesapDTO
      })
    }
    
  }
}
