import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

private usuarioSubject = new BehaviorSubject<Usuario>({})

  constructor(private tokenService:TokenService) {
		if(this.tokenService.possuiToken()){
			this.decodificaJWT()
		}
	 }

	private decodificaJWT() {
		const token = this.tokenService.retornaToken()
		const usuario = jwt_decode(token) as Usuario
		this.usuarioSubject.next(usuario)
	}

	retornaUsuario() {
		this.usuarioSubject.asObservable()
	}

	salvaToken(token: string) {
		this.tokenService.salvaToken(token)
		this.decodificaJWT()
	}

	logout(){
		this.tokenService.excluiToken()
		this.usuarioSubject.next({})
	}

	estaLogado(){
		this.tokenService.possuiToken()
	}

}


