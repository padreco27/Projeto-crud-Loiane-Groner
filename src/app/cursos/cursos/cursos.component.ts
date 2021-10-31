import { Component, OnInit } from '@angular/core';
import { Cursos } from './../modelo/cursos';
import { CursosService } from './../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Cursos[] =[

  ];

  displayedColumns=[
    'nome','categoria'
  ]

  cursosService:CursosService

  constructor() {
    this.cursosService=new CursosService();
    this.cursos =this.cursosService.list();
  }

  ngOnInit(): void {
  }

}
