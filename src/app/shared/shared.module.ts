import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { ErrosDialogComponent } from './components/erros-dialog/erros-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CategoriaPipe } from './pipes/categoria.pipe';



@NgModule({
  declarations: [ComponentsComponent, ErrosDialogComponent, CategoriaPipe],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],

  exports: [
    ErrosDialogComponent,
    CategoriaPipe
  ]
})
export class SharedModule { }
