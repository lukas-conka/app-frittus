import { ComprasComponent } from './components/compras/compras.component';
import { VendasComponent } from './components/vendas/vendas.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'home', component: DashboardComponent},
    {path: 'vendas', component: VendasComponent},
    {path: 'compras', component: ComprasComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
