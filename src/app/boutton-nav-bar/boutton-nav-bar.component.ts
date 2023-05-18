import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from "../model/Event-model";

@Component({
  selector: 'app-boutton-nav-bar',
  templateUrl: './boutton-nav-bar.component.html',
  styleUrls: ['./boutton-nav-bar.component.css']
})
export class BouttonNavBarComponent implements OnInit{

  imageUrl!: string
  title!: string
  dim!: string;
  @Input() bouttonModel! :EventModel
  ngOnInit(): void {

    this.imageUrl = this.bouttonModel.imageUrl
    this.title =this.bouttonModel.title
    this.dim =  this.bouttonModel.subtitle
    console.log('init.....')

  }


  Onclicked() : { img: string; tile: string }{

    return {'img' :this.imageUrl , 'tile': this.title}
  }


}
