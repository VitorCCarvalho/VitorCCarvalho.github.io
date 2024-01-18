import { ListaPessoasComponent } from './componentes/lista-pessoas/lista-pessoas.component';
import { PessoaDetalheComponent } from './componentes/pessoa-detalhe/pessoa-detalhe.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'listapessoas',
        pathMatch: 'full'
    },
    {
        path: 'listapessoas',
        component: ListaPessoasComponent
    },
    {
        path: 'pessoadetalhe',
        component: PessoaDetalheComponent,
        
    }
];
