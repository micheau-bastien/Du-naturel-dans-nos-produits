import { NgModule, ErrorHandler, enableProdMode } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FullArticlePage } from '../pages/fullArticle/fullArticle';
import { WriteArticlePage } from '../pages/writeArticle/writeArticle';
import { DataService } from '../providers/firebase';
enableProdMode()
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FullArticlePage,
    WriteArticlePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WriteArticlePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataService]
})
export class AppModule {}
