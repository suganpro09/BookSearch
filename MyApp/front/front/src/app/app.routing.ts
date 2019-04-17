
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./list-product/list-product.component";

const routes: Routes = [
 
  { path: 'list-books', component: ListProductComponent },
 
];

export const routing = RouterModule.forRoot(routes);




