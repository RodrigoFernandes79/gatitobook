import { Injectable } from '@angular/core';

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

	retornaToken() {
		return localStorage.getItem(KEY) ?? ''
	}

	salvaToken(token: string) {
		return localStorage.setItem(KEY, token)
	}

	excluiToken() {
	localStorage.removeItem(KEY)
	}

	possuiToken() {
		return !!this.retornaToken() //retorna um boleano : verifica se tem ou nao tem token
	}

}
