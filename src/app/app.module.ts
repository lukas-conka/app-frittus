import { DadosService } from './services/dados.service';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VendasComponent } from './components/vendas/vendas.component';
import { ComprasComponent } from './components/compras/compras.component';
import { FormsModule} from '@angular/forms';
import { AddVendaComponent } from './components/add-venda/add-venda.component';
import { VendaComponent } from './components/venda/venda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    VendasComponent,
    ComprasComponent,
    AddVendaComponent,
    VendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
