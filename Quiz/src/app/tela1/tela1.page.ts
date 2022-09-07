import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela1',
  templateUrl: './tela1.page.html',
  styleUrls: ['./tela1.page.scss'],
})
export class Tela1Page {
  public perguntas:Array<object>;
  public pontos:number;
  public erros:number;
  constructor(private router:Router) {
    this.pontos = 0;
    this.erros = 0;
    this.perguntas = [
      {
        pergunta: "pergunta1",
        acertou: false,
        mudou : false
      },
      {
        pergunta: "pergunta2",
        acertou: false,
        mudou : false
      },
      {
        pergunta: "pergunta3",
        acertou: false,
        mudou : false
      },
      {
        pergunta: "pergunta4",
        acertou: false,
        mudou : false
      },
      {
        pergunta: "pergunta5",
        acertou: false,
        mudou : false
      },
      {
        pergunta: "pergunta6",
        acertou: false,
        mudou : false
      },
      {
        pergunta: "pergunta7",
        acertou: false,
        mudou : false
      },
      {
        pergunta: "pergunta8",
        acertou: false,
        mudou : false
      },
    ]
  }


  radioGroupChange($event, pergunta){
    let valor = $event.detail.value;
    // find a object in array
    let index = this.perguntas.findIndex((obj => obj['pergunta'] == pergunta));
    if(valor == "correto"){
      this.pontos++;
      this.perguntas[index]['acertou'] = true;
    } else {
      this.erros++;
      this.perguntas[index]['acertou'] = false;
    }
    this.perguntas[index]['mudou'] = true;
  }

  prosseguir(){
    let validou = true;
    this.perguntas.forEach(element => {
      if(element['mudou'] == false){
        validou = false;
      }
    });
    if(validou){
      this.mudaTela();
    }
  }

  mudaTela(){
    this.router.navigate(['tela2'], {queryParams: {pontos: this.pontos, erros: this.erros}});
  }
  


}
