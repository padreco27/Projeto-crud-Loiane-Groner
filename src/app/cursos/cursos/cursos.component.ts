import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from './../modelo/cursos';
import { CursosService } from './../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Cursos[]> ;

  displayedColumns=[
    'nome','categoria'
  ];


  constructor(private cursosService:CursosService ) {
   // this.cursosService=new CursosService();
   this.cursos$= this.cursosService.list();
  }

  ngOnInit(): void {


  }

}
