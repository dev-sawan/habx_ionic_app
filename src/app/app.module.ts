import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FavouritePage } from '../pages/favourite/favourite';

import { Http, HttpModule } from '@angular/http';
import {
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular'

export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, 'http://www.habx.in/wp-json/', /* namespace is optional, default: '/wp/v2' */);
}

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WebhabxProvider } from '../providers/webhabx/webhabx';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ContactPage,
    HomePage,
    TabsPage,
    FavouritePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    WpApiModule.forRoot({
          provide: WpApiLoader,
          useFactory: (WpApiLoaderFactory),
          deps: [Http]
        }),

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ContactPage,
    HomePage,
    TabsPage,
    FavouritePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebhabxProvider
  ]
})
export class AppModule {}
