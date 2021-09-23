import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './body/new.component';
import { LayoutMainComponent } from './Layout/main-layout.component';
import { LayoutMenJeansComponent } from './Layout/Mens-jeans/mens-jeans-layout.component';
import { LayoutMenNewComponent } from './Layout/Mens-new/mens-new-layout.component';
import { LayoutWomenJeansComponent } from './Layout/Womens-jeans/womens-jeans-layout.component';
import { LayoutWomenNewComponent } from './Layout/Womens-new/womens-new-layout.component';

const routes: Routes = [
  {path: 'new', component : NewComponent},
  {path: 'new-women', component : LayoutWomenNewComponent},
  {path: 'new-men', component : LayoutMenNewComponent},
  {path: 'jeans-women', component : LayoutWomenJeansComponent},
  {path: 'jeans-men', component : LayoutMenJeansComponent},
  {path: '', component : LayoutMainComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
