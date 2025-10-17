import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { MarketModalComponent } from '../market-modal/market-modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-market-table',
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './market-table.component.html',
  styleUrl: './market-table.component.scss'
})
export class MarketTableComponent implements OnInit{
  @Input() cryptos: any[] = [];
  cryptosPaginadas: any[] = [];
  // Variables para la paginación
  totalItems = 0;
  pageSize = 10;
  pageIndex = 0;

  constructor(public dialog: MatDialog) { }
  ngOnInit() {
      this.totalItems = this.cryptos.length;
      // Inicializar la tabla con la primera página
      this.paginarDatos(); 
    }
  paginarDatos() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    // Usar slice para obtener solo los datos de la página actual
    this.cryptosPaginadas = this.cryptos.slice(startIndex, endIndex);
  }
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.paginarDatos(); // Recalcula y actualiza los datos a mostrar
  } 
  abrirModal(): void {
    const dialogRef = this.dialog.open(MarketModalComponent, {
      width: '400px', // Define el ancho del modal
      data: { nombre: 'Usuario', mensaje: 'Hola desde el componente principal!' } // Datos opcionales a enviar al modal
    });

    // Suscribirse para recibir el resultado cuando el modal se cierra
    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró con resultado:', result);
      // 'result' será el valor pasado a dialogRef.close()
      if (result) {
          // Lógica a ejecutar si el usuario hizo 'Aceptar'
      }
    });
  }  
}
