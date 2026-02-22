import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { TortaFresa } from './components/torta-fresa/torta-fresa';
import { VolcanChocolate } from './components/volcan-chocolate/volcan-chocolate';
import { ClasicoVainilla } from './components/clasico-vainilla/clasico-vainilla';
import { RedVelvet } from './components/red-velvet/red-velvet';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'torta-fresa', component: TortaFresa },
  { path: 'volcan-chocolate', component: VolcanChocolate },
  { path: 'clasico-vainilla', component: ClasicoVainilla },
  { path: 'red-velvet', component: RedVelvet },
];