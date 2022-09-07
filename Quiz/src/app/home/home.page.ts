import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface login {
  user:string;
  pass:string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public users:Array<login>=[];
  public user:string;
  public pass:string;

  public userErro:string;
  public passErro:string;

  constructor(private router:Router) {
    this.users = [
      {
        user: 'Daniel David',
        pass: '123'
      },
      {
        user: 'Joao',
        pass: '1234'
      },
      {
        user: 'Marcus',
        pass: '1234'
      }
      
    ]
    this.user = "";
    this.pass = "";
    this.passErro = "";
    this.userErro = "";
  }

  pesquisaLogin(){
    let validar = false;
    let passFail = false;
    let userFail = false;
    for(const usuario of this.users){
      if(usuario.user ===  this.user){
        userFail = false;
        if(usuario.pass === this.pass){
          validar = true;
          passFail = false;
          break;
        } else {
          passFail = true;
          break;
        }
      } else if(usuario.user !== this.user) {
        userFail = true;
      }
    }
    if(validar){
      this.entrar();
    } else {
      if(userFail){
        this.userErro = "Usuario não encontrado";
      }
      if(passFail){
        this.passErro = "Senha incorreta";
      }
    }
  }
  entrar(){
    this.router.navigate(['tela1']);
  }
  
  retiraErro(){
    if(this.userErro.length > 0){
    this.userErro = "";
    this.passErro = "";
    this.user = "";
    this.pass = "";
    } else if(this.passErro.length > 0){
      this.passErro = "";
      this.userErro = "";
      this.pass = "";
    }
  }
}
