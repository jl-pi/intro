import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';

import { AboutComponent } from './components/about/about.component';
import { CommentTreeComponent } from './components/comment-tree/comment-tree.component';
import { HomeComponent } from './components/home/home.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PostComponent } from './components/post/post.component';
import { TagModule } from './components/tag-crud/tag.module';
import { FooterComponent } from './components/utility/footer/footer.component';
import { LandingNavComponent } from './components/utility/landing-nav/landing-nav.component';
import { LandingPortfolioComponent } from './components/utility/landing-portfolio/landing-portfolio.component';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import { TokenInterceptor } from './helpers/token.interceptor';
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
    PostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MarkdownModule.forRoot(), TagModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
