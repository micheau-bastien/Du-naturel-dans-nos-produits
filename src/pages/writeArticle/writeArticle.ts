import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/firebase';


@Component({
    selector: 'page-write-article',
    templateUrl: 'writeArticle.html'
})
export class WriteArticlePage {
    private html: string = "";

    constructor(public navCtrl: NavController, public dataService: DataService) {
        console.log('write')
    }

    ngOnInit(){
    }
}
