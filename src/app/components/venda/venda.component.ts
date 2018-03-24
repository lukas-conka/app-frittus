import { DadosService } from './../../services/dados.service';
import { Vendas } from './../../models/Vendas';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  @Input("vendaInput") venda: Vendas;

  constructor(public service: DadosService) { }

  ngOnInit() {
  }

  excluirVenda(){
    event.preventDefault();
    this.service.excluirVenda(this.venda);
  }

}
