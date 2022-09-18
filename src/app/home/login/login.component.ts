import { AutenticacaoService } from './../../autenticacao/autenticacao.service';

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
	providers: [MessageService]
})
export class LoginComponent implements OnInit {


	usuario = ''
	senha = ''

  constructor(private authService:AutenticacaoService, private messageService: MessageService,
		private router:Router ) { }

  ngOnInit(): void {
  }

	login(){
this.authService.autenticar(this.usuario,this.senha)
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



}
