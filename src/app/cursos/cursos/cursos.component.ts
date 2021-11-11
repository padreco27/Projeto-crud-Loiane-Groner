import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrosDialogComponent } from 'src/app/shared/components/erros-dialog/erros-dialog.component';
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


  constructor(private cursosService:CursosService,
    public dialog: MatDialog ) {
   // this.cursosService=new CursosService();
   this.cursos$ = this.cursosService.list()
   .pipe(
     catchError(error => {
       this.onError('Erro ao carregar cursos.');
       return of([])
     })
   );
  }

  ngOnInit(): void {


  }

  onError(errorMsg: string) {
    this.dialog.open(ErrosDialogComponent, {
      data: errorMsg
    });
  }


}
