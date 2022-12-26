import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'blog',
    component: HomeComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'article/:id', component: ArticleComponent },
      {
        path: 'tag',
        loadChildren: () => import('./components/tag-crud/tag.module').then(m => m.TagModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
