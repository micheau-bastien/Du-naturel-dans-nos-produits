import { Component } from '@angular/core';
import {FullArticlePage} from '../fullArticle/fullArticle';
import {WriteArticlePage} from '../writeArticle/writeArticle';
import { NavController } from 'ionic-angular';
import {DataService} from '../../providers/firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private writeArticlePage: any = WriteArticlePage;
  private urlImg: any;
  private articles: any = undefined;
  private selectedArticle: any = undefined;

  constructor(public navCtrl: NavController, public dataService: DataService) {
    this.dataService.firebase.storage().ref('a.png').getDownloadURL().then(url => {
      this.urlImg = url;
    })

    this.dataService.firebase.database().ref('/articles').once('value').then(articles => {
      this.articles = articles.val();
    })
  }

  voirPlus(article: any): void{
    this.selectedArticle = article;
  }

}
