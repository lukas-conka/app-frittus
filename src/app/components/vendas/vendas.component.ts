import { Vendas } from './../../models/Vendas';
import { DadosService } from './../../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  vendas: Vendas[];

  constructor(public service: DadosService) { }

  ngOnInit() {

    this.vendas = this.service.getPerguntas();
  }

    serviceVenda(venda: Vendas){
      console.log(venda);
      this.service.addVenda(venda);
  }

}
