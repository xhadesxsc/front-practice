import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Venta, VentaDTO } from '../venta';
import { VentasService } from '../ventas.service';

@Component({
  selector: 'app-list-venta',
  templateUrl: './list-venta.component.html',
  styleUrls: ['./list-venta.component.css']
})
export class ListVentaComponent implements OnInit {
  ventas;
  constructor(private ventasService: VentasService,private httpClient: HttpClient) { }
  displayedColumns: string[] = ['cantidad', 'cliente', 'producto', 'precio'];
  //dataSource;

  @Output()
  borrado: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    this.ventasService.obtenerTodos().subscribe(respuesta=>{
      console.log("dsaasd");
        this.ventas=respuesta.data;
        console.log(this.ventas);
        //this.dataSource=respuesta.data;
    });

    
  }

  borrar(peliculaId: number): void {
    //this.ventasService.borrar(peliculaId)
    //.subscribe(() => this.borrado.emit());
  }

  
}


