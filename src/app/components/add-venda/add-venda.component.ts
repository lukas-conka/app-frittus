import { Vendas } from './../../models/Vendas';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-venda',
  templateUrl: './add-venda.component.html',
  styleUrls: ['./add-venda.component.css']
})
export class AddVendaComponent implements OnInit {

  @Output() vendaAdd = new EventEmitter<Vendas>();
  //criei uma variavel de evento e posso enviar o que eu quiser pra ela no caso to enviando um objeto venda

  cliente:string;
  valor:string;
  data:string;

  constructor() { }

  ngOnInit() {
  }

  addVenda(){
    
    this.vendaAdd.emit({cliente:this.cliente, valor: this.valor, data: this.data});
  }
}
