import { Router } from '@angular/router';
import { NovoUsuarioService } from './novo-usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { minusculoValidator } from './minusculo-validator';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';



@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']

})
export class NovoUsuarioComponent implements OnInit {

	novoUsuarioForm:FormGroup


  constructor(private formBuilder:FormBuilder, private usuarioExistenteService:UsuarioExisteService,
		private novoUsuarioService:NovoUsuarioService, private router:Router) {

		this.novoUsuarioForm = this.formBuilder.group({

			userName:['',
			[Validators.required,minusculoValidator],
			[this.usuarioExistenteService.usuarioJaExiste()],
		],
			fullName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(120)]],
			email:['',[Validators.required,Validators.email]],
			password:['',[Validators.required]],

		},
		  {
				validators:[usuarioSenhaIguaisValidator],
		},
		)

	 }

  ngOnInit(): void {

  }

	cadastroUsuario(){

		this.novoUsuarioService.cadastrarNovoUsuario(this.novoUsuarioForm.value)
		.subscribe((resposta)=>{
			this.router.navigate([''])



		},
		errors =>{
			console.log(errors)
		})

	}
}
