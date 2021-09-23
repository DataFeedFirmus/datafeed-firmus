import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./component/main/main.component";
import {StockComponent} from "./component/stock/stock.component";
import {EtfComponent} from "./component/etf/etf.component";
import {ForexComponent} from "./component/forex/forex.component";
import {IndiciesComponent} from "./component/indicies/indicies.component";


const routes: Routes = [
  { path: '', component: StockComponent },
  { path: 'main', component: MainComponent , children:[
      { path: 'stocks', component: StockComponent },
      { path: 'crypto', component: EtfComponent },
      { path: 'forex', component: ForexComponent },
      { path: 'indexes', component: IndiciesComponent }
    ]

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
