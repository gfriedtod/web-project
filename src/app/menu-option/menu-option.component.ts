import {Component, OnInit} from '@angular/core';
import {EventModel} from "../model/Event-model";

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.css']
})
export class MenuOptionComponent implements  OnInit{
  imageUrl!: string
  title!: any
  dim!: string;
  index!:number;


  boutons! : EventModel[]
  state!: number;
  ngOnInit(): void {
    this.index =0;




    this.title =['HOME' ,'CHRONOLOGIE' ,'OBJECTIF','OUEUVRE']
    this.dim = 'ttl'
    this.state=0

  }




}
