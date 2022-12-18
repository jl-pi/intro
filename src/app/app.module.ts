import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';

import { CommentTreeComponent } from './components/comment-tree/comment-tree.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';

import { TagModule } from './components/tag-crud/tag.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingNavComponent } from './components/utility/landing-nav/landing-nav.component';
import { LandingPortfolioComponent } from './components/utility/landing-portfolio/landing-portfolio.component';
import { FooterComponent } from './components/utility/footer/footer.component';
import { MarkdownModule } from 'ngx-markdown';
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CommentTreeComponent,
    AboutComponent,
    HomeComponent,
    LandingPageComponent,
    LandingNavComponent,
    LandingPortfolioComponent,

    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    TagModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
