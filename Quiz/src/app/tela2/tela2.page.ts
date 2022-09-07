import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.page.html',
  styleUrls: ['./tela2.page.scss'],
})
export class Tela2Page{
  public pontos:number;
  public erros:number;
  public msg:string;
  constructor(private router:Router) { 
    this.pontos = this.router.getCurrentNavigation().extras.queryParams.pontos;
    this.erros = this.router.getCurrentNavigation().extras.queryParams.erros;
    this.msg = "";
  }

  ngOnInit() {
    // calcule the percentage of correct answers
    let percent = (this.pontos / 8) * 100;
    if(percent >= 50){
      this.msg = "Parabéns, você acertou " + percent + "% das perguntas";
    } else if(percent < 50 && percent >= 25){
      this.msg = "Você acertou " + percent + "% das perguntas";
    } else {
      this.msg = "Estude mais, você acertou " + percent + "% das perguntas";
    }
    
  }


}
