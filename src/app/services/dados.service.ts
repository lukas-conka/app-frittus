import { Vendas } from './../models/Vendas';
import { Injectable } from '@angular/core';


@Injectable()
export class DadosService {

  vendas: Vendas[];

  constructor() { 

    /*this.vendas = [
      {
        cliente: "Lucas",
        valor: "25",
        data: "10-10-2018"
      },
      {
        cliente: "Samara",
        valor: "50",
        data: "20-10-2018"
      },
    ];
    */

  }

  getPerguntas(){
    //return this.vendas;
    if(localStorage.getItem('vendas') == null){
      this.vendas = [];
    }else{
      this.vendas = JSON.parse(localStorage.getItem('vendas'));
    }
    return this.vendas;
  }

  addVenda(venda: Vendas){
    let vendas;
    this.vendas.unshift(venda);

    if(localStorage.getItem('vendas') == null){
      vendas = [];
      vendas.unshift(venda);
      localStorage.setItem('vendas', JSON.stringify(vendas));

    }else{
      vendas = JSON.parse(localStorage.getItem('vendas'));

      vendas.unshift(venda);

      localStorage.setItem('vendas', JSON.stringify(vendas));
    }
  }

  excluirVenda(venda: Vendas){
    
    for(let i = 0; i < this.vendas.length; i++){
      if(venda == this.vendas[i]){
        this.vendas.splice(i,1);
        localStorage.setItem('vendas', JSON.stringify(this.vendas));
      }
    }
  }


}
