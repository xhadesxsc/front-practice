import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaVenta, Venta, ventaCreacionDTO, VentaDTO } from '../venta';
import { VentasService } from '../ventas.service';

@Component({
  selector: 'app-add-venta',
  templateUrl: './add-venta.component.html',
  styleUrls: ['./add-venta.component.css']
})
export class AddVentaComponent implements OnInit {

  constructor(private ventasService: VentasService,
    private router: Router) {}

  errores: string[] = [];
  lstVentas;
  promedioPonderado: Number;
  //cinesNoSeleccionados: MultipleSelectorModel[];

  ngOnInit(): void {
    this.ventasService.obtenerTodos()
    .subscribe(resultado => {
      console.log("resultado");
        console.log(resultado);
      
    }, error => console.error(error));
  }
//salesId:data.salesId, cliente:data.cliente, producto:data.producto,cantidad:data.cantidad,precio:data.precio, fecha:data.fecha
  guardarCambios(notas: ventaCreacionDTO) {
    this.ventasService.crear(notas).subscribe(
      () => {
        this.router.navigate(['/sales']);
      },
      (error) => this.errores = ['']
    );
  }
}
