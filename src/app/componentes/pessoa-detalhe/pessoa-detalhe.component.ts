import { Pessoa } from '../pessoa';
import { OcorrenciaEntrevDesapDTO } from './../ocorrenciaEntrevDesapDTO';
import { UltimaOcorrencia } from './../ultimaOcorrencia';
import { PessoaDetalheService } from '../pessoaDetalhe.service'

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import {MatListModule} from '@angular/material/list';
import { DatePipe } from '@angular/common';

import { ShareButtonsModule  }  from 'ngx-sharebuttons/buttons'
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareModule } from 'ngx-sharebuttons';

@Component({
  selector: 'app-pessoa-detalhe',
  standalone: true,
  imports: [MatListModule,
            DatePipe,
            FontAwesomeModule,
            ShareModule,
            ShareButtonsModule,
            ShareIconsModule],
  templateUrl: './pessoa-detalhe.component.html',
  styleUrl: './pessoa-detalhe.component.css'
})
export class PessoaDetalheComponent {
  id: string | null
  pessoa : Pessoa | any
  ultOco: UltimaOcorrencia | any
  entrev: OcorrenciaEntrevDesapDTO | any
  dtDesaparecimento : Date | any

  faFacebook = faFacebook;
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
