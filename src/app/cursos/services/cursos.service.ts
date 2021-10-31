import { Injectable } from '@angular/core';
import { Cursos } from './../modelo/cursos';
import {HttpClient} from '@angular/common/http'
import { first, tap,delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {


  private readonly API = '/assets/cursos.json';

  constructor(private httpClient:HttpClient ) {}


  list() {
    return this.httpClient.get<Cursos[]>(this.API)
    .pipe(
      first(),
      delay(0),
      tap(cursos => console.log(cursos))
    );
   }

}
