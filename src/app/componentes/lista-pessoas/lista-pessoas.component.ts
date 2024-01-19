import { Pessoa } from '../pessoa';
import { ListaPessoaService } from '../listaPessoa.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import {MatSort, MatSortModule} from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-lista-pessoas',
  standalone: true,
  imports: [CommonModule, 
            RouterModule,
            MatFormFieldModule, 
            MatInputModule,
            MatTableModule, 
            MatPaginatorModule, 
            MatSortModule,
            RouterLink],
  templateUrl: './lista-pessoas.component.html',
  styleUrl: './lista-pessoas.component.scss'
})

export class ListaPessoasComponent implements AfterViewInit{
  displayedColumns: string[] = ['nome', 'idade', 'sexo', 'link'];
  listaPessoas: Pessoa[] = []
  dataSource = new MatTableDataSource<Pessoa>(this.listaPessoas);


  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};
  @ViewChild(MatSort) sort: MatSort = <MatSort>{};

  constructor(private service: ListaPessoaService) {
    this.service.listar().subscribe((listaPessoas: any) => {
      this.listaPessoas = listaPessoas.content
      
      
    })
    
  }
  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.listaPessoas)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
