import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formatearFecha } from '../utilidades/utilidades';
import { environment } from 'src/environments/environment';
import { RespuestaVenta, ventaCreacionDTO, VentaDTO } from './venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'Sales';
/*
  public obtenerLandingPage(): Observable<LandingPageDTO>{
    return this.http.get<LandingPageDTO>(this.apiURL);
  }
*/

  public obtenerTodos(){
    return this.http.get<RespuestaVenta>(`${this.apiURL}/GetAllMemory`);
  }

  public crear(venta: ventaCreacionDTO) {
    const formData = this.ConstruirFormData(venta);
    return this.http.post(`${this.apiURL}/InsertMemory`, formData);
  }
/*
  public calculate(notas: notasCreacionDTO){
    return this.http.get<notasDTO>(`${this.apiURL}/Calculate`);
  }
*/
  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }


  convertstring(cadena){
    let number_parsed: any = parseFloat(cadena).toFixed(4)
    return number_parsed
}

private ConstruirFormData(venta: ventaCreacionDTO): FormData {
  const formData =  new FormData();

  formData.append('cliente', venta.cliente);
  formData.append('producto', venta.producto);
  formData.append('cantidad', venta.cantidad.toString());
  formData.append('precio', venta.precio.toString());
  if (venta.fecha){
    formData.append('fecha', formatearFecha(venta.fecha));
  }


  return formData;
}

}
