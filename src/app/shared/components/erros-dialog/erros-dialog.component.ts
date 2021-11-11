import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-erros-dialog',
  templateUrl: './erros-dialog.component.html',
  styleUrls: ['./erros-dialog.component.scss']
})
export class ErrosDialogComponent implements OnInit {


    constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}


  ngOnInit(): void {
  }

}
