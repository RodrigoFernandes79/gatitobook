import { AutenticacaoService } from './../../autenticacao/autenticacao.service';

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
	providers: [MessageService]
})
export class LoginComponent implements OnInit {

	formGroup:FormGroup



  constructor(private authService:AutenticacaoService, private messageService: MessageService,
		private router:Router, private formBuilder:FormBuilder ) {

			this.formGroup = this.formBuilder.group({
				usuario:['',[Validators.required,Validators.minLength(5),Validators.maxLength(120)]],
				senha:['',[Validators.required]]

			})
		 }



  ngOnInit(): void {
  }

	login(){
		console.log(this.formGroup.value)
this.authService.autenticar(this.formGroup.value.usuario,this.formGroup.value.senha)
.subscribe((resposta)=>{

	this.messageService.add({severity:'success', summary: 'Logado!', detail: 'Usuário logado com sucesso!'});
	this.messageService.clear()

	this.router.navigate(['lista-animais'])
},
(error)=>{
	alert("Erro!")
	console.log(error)
}

)

	}
	registrar(){
		this.router.navigate(['home/novousuario'])
	}


}
