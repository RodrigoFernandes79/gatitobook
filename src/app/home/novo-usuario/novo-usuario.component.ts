import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { minusculoValidator } from './minusculo-validator';


@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

	novoUsuarioForm:FormGroup


  constructor(private formBuilder:FormBuilder) {
		this.novoUsuarioForm = this.formBuilder.group({

			userName:['',[Validators.required,minusculoValidator]],
			fullName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(120)]],
			email:['',[Validators.required,Validators.email]]

		})

	 }

  ngOnInit(): void {

  }

	cadastroUsuario(){

	}
}
