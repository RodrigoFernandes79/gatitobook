import { AutenticacaoService } from './../../autenticacao/autenticacao.service';

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
	providers: [MessageService]
})
export class LoginComponent implements OnInit {


	usuario = ''
	senha = ''

  constructor(private authService:AutenticacaoService, private messageService: MessageService ) { }

  ngOnInit(): void {
  }

	login(){

this.authService.autenticar(this.usuario,this.senha)
.subscribe((resposta)=>{
console.log('sucesso')
		this.messageService.add({severity:'success', summary: 'Logado!', detail: 'Usuário logado com sucesso!'});
},
(error)=>{
	alert("Erro!")
	console.log(error)
}

)

	}



}
