import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ventaCreacionDTO } from '../venta';

@Component({
  selector: 'app-form-venta',
  templateUrl: './form-venta.component.html',
  styleUrls: ['./form-venta.component.css']
})
export class FormVentaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  errores: string[] = [];

  @Input()
  modelo: ventaCreacionDTO;

  @Output()
  onSubmit: EventEmitter<ventaCreacionDTO> = new EventEmitter<ventaCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cliente: ['', {
        validators: [Validators.required]
      }],
      producto: ['', {
        validators: [Validators.required]
      }],
      cantidad: ['', {
        validators: [Validators.required]
      }],
      precio: ['', {
        validators: [Validators.required]
      }],
      fecha: [new Date, {
        validators: ''
      }]
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('producto');
    if (campo.hasError('required')){
      return 'El campo es requerido'; 
    }
    return '';
  }

  obtenerErrorCampoApellido(){
    var campo = this.form.get('apellidos');
    if (campo.hasError('required')){
      return 'El campo apellido es requerido'; 
    }
    return '';
  }
}
