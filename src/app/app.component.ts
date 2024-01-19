import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { PessoaDetalheComponent } from './componentes/pessoa-detalhe/pessoa-detalhe.component';
import { ListaPessoasComponent } from './componentes/lista-pessoas/lista-pessoas.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { routes } from '../app/app.routes'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CabecalhoComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste_petize';
}
