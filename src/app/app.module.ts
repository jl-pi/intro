import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';

import { CommentTreeComponent } from './components/comment-tree/comment-tree.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TagModule } from './components/tag-crud/tag.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingNavComponent } from './components/utility/landing-nav/landing-nav.component';
import { LandingPortfolioComponent } from './components/utility/landing-portfolio/landing-portfolio.component';
import { ShopComponent } from './shop/shop.component';
import { appInitializer } from './helpers/app.initializer';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthenticationService } from './services/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutModule } from './components/auth-layout/auth-layout.module';
import { FooterComponent } from './components/utility/footer/footer.component';
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
    ShopComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthLayoutModule,
    TagModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [

    // { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthenticationService] },
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
