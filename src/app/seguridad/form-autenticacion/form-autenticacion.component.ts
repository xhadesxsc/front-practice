import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { credencialesUsuario, UserDto } from '../seguridad';

@Component({
  selector: 'app-form-autenticacion',
  templateUrl: './form-autenticacion.component.html',
  styleUrls: ['./form-autenticacion.component.css']
})
export class FormAutenticacionComponent  implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  form: FormGroup;

  @Input()
  errores: string[] = [];
  @Input()
  accion: string;
  @Output()
  onSubmit: EventEmitter<credencialesUsuario> = new EventEmitter<credencialesUsuario>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      password: [
        '',
        {
          validators: [Validators.required]
        }
      ]
    });
  }

  obtenerMensajeErrorEmail(){
    var campo = this.form.get('email');
    if (campo.hasError('required')){
      return 'El campo Email es requerido';
    }

    if (campo.hasError('email')){
      return 'El email no es válido';
    }

    return '';
  }
}

