import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'page-full-article',
    templateUrl: 'fullArticle.html'
})
export class FullArticlePage {
    @Input('article') article: any;

    constructor(public navCtrl: NavController) {
    }

    ngOnInit(){
        console.log(this.article);                
    }
}
