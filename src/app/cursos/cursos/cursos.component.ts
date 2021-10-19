import { Component, OnInit } from '@angular/core';
import { Cursos } from './../modelo/cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Cursos[] =[
    {_id: '1',nome:'Angular',categoria: 'Front-End'}
  ];

  displayedColumns=[
    'nome','categoria'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
