import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }


    list(){
      return[
        {_id: '1',nome:'Angular',categoria: 'Front-End'}
      ]
    }

}
