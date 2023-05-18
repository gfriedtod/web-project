import {Component, OnInit} from '@angular/core';
import {BouttonNavBarComponent} from "../boutton-nav-bar/boutton-nav-bar.component";
import {EventModel} from "../model/Event-model";
import { trigger, transition, style, animate } from '@angular/animations';
import {ExternalExpr} from "@angular/compiler";

// @ts-ignore
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  animations: [trigger('fade', [
    transition(':increment', [
      style({ transform : 'translatex(-100%) '}),
      animate('1s ease-out', style({transform : 'translatex(0%)'}))
    ]),]),

    trigger('fade-text',[

      transition(':increment',[

        style({transform: 'translatex(100%)',
          opacity: '0'}),
        animate('1s ease-in-out', style({ transform: 'translatex(0%)' ,
          opacity:'1'}))
      ])
    ]),

    trigger( 'fade-rigth',[
        transition(':increment' ,[
          style({transform : 'translatex(50%) '}),
          animate('2s', style({transform : 'translate(20%)'}))
        ])
      ]

    ),
    trigger( 'fade-left',[
        transition(':decrement' ,[
          style({transform : 'translatex(50%) '}),
          animate('2s', style({transform : 'translate(-20%)'}))
        ])
      ]

    ),
    // trigger('text-fade',[
    //   transition(':increment')
    // ])
  ]
})
export class MenuBarComponent implements  OnInit{
  imageUrl!: string
  title!: string
  dim!: string;
  index!:number;


  boutons! : EventModel[]
  state!: number;
  ngOnInit(): void {
    this.index =0;


    this.boutons =[
      new EventModel('firstE' ,'Lorem ipsum dolor sit amet','https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg') ,new EventModel('SecontEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://cdn.pixabay.com/photo/2016/08/02/22/02/child-1565202_640.jpg'),new EventModel('LastEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://www.unicef.org/mali/sites/unicef.org.mali/files/styles/hero_desktop/public/AN6Q9530.JPG?itok=nLPTEsw6'),
      new EventModel('firstE' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg') ,new EventModel('SecontEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://cdn.pixabay.com/photo/2016/08/02/22/02/child-1565202_640.jpg'),new EventModel('LastEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://www.unicef.org/mali/sites/unicef.org.mali/files/styles/hero_desktop/public/AN6Q9530.JPG?itok=nLPTEsw6'),
      new EventModel('firstE' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg') ,new EventModel('SecontEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://cdn.pixabay.com/photo/2016/08/02/22/02/child-1565202_640.jpg'),new EventModel('LastEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://www.unicef.org/mali/sites/unicef.org.mali/files/styles/hero_desktop/public/AN6Q9530.JPG?itok=nLPTEsw6'),
      new EventModel('firstE' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg') ,new EventModel('SecontEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://cdn.pixabay.com/photo/2016/08/02/22/02/child-1565202_640.jpg'),new EventModel('LastEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://www.unicef.org/mali/sites/unicef.org.mali/files/styles/hero_desktop/public/AN6Q9530.JPG?itok=nLPTEsw6'),
      new EventModel('firstE' ,'Lorem ipsum dolor sit amet','https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg') ,new EventModel('SecontEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://cdn.pixabay.com/photo/2016/08/02/22/02/child-1565202_640.jpg'),new EventModel('LastEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://www.unicef.org/mali/sites/unicef.org.mali/files/styles/hero_desktop/public/AN6Q9530.JPG?itok=nLPTEsw6'),
      new EventModel('firstE' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg') ,new EventModel('SecontEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://cdn.pixabay.com/photo/2016/08/02/22/02/child-1565202_640.jpg'),new EventModel('LastEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://www.unicef.org/mali/sites/unicef.org.mali/files/styles/hero_desktop/public/AN6Q9530.JPG?itok=nLPTEsw6'),
      new EventModel('firstE' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg') ,new EventModel('SecontEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://cdn.pixabay.com/photo/2016/08/02/22/02/child-1565202_640.jpg'),new EventModel('LastEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://www.unicef.org/mali/sites/unicef.org.mali/files/styles/hero_desktop/public/AN6Q9530.JPG?itok=nLPTEsw6'),
      new EventModel('firstE' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg') ,new EventModel('SecontEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://cdn.pixabay.com/photo/2016/08/02/22/02/child-1565202_640.jpg'),new EventModel('LastEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://www.unicef.org/mali/sites/unicef.org.mali/files/styles/hero_desktop/public/AN6Q9530.JPG?itok=nLPTEsw6'),
      new EventModel('firstE' ,'Lorem ipsum dolor sit amet','https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg') ,new EventModel('SecontEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://cdn.pixabay.com/photo/2016/08/02/22/02/child-1565202_640.jpg'),new EventModel('LastEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://www.unicef.org/mali/sites/unicef.org.mali/files/styles/hero_desktop/public/AN6Q9530.JPG?itok=nLPTEsw6'),
      new EventModel('firstE' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg') ,new EventModel('SecontEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://cdn.pixabay.com/photo/2016/08/02/22/02/child-1565202_640.jpg'),new EventModel('LastEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://www.unicef.org/mali/sites/unicef.org.mali/files/styles/hero_desktop/public/AN6Q9530.JPG?itok=nLPTEsw6'),
      new EventModel('firstE' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg') ,new EventModel('SecontEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://cdn.pixabay.com/photo/2016/08/02/22/02/child-1565202_640.jpg'),new EventModel('LastEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://www.unicef.org/mali/sites/unicef.org.mali/files/styles/hero_desktop/public/AN6Q9530.JPG?itok=nLPTEsw6'),
      new EventModel('firstE' ,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg') ,new EventModel('SecontEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://cdn.pixabay.com/photo/2016/08/02/22/02/child-1565202_640.jpg'),new EventModel('LastEv','Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, velit?','https://www.unicef.org/mali/sites/unicef.org.mali/files/styles/hero_desktop/public/AN6Q9530.JPG?itok=nLPTEsw6'),

    ]

    this.imageUrl =this.boutons[0].imageUrl
    this.title ='title'
    this.dim = 'ttl'
    this.state=0

  }


  onSnap(imageUrl: string, subtitle: string, state: any) {
    this.state+=1
    this.imageUrl =  imageUrl
    this.dim =subtitle

    console.log(this.state)

  }

  goLeft() {
    if(this.index >=0){
      this.index=Math.abs(this.index)
      console.log('joum')
    }

    this.index=this.index-20
    console.log(this.index)

// this.index++
  }

  goRigth() {

    this.index=Math.abs(this.index+20)
    console.log(this.index)
    // this.index--
  }

  protected readonly transition = transition;

  goLeftpress() {

    // while (true){
    //   try {
    //     this.index=(this.index-20)
    //     console.log(this.index)
    //   } catch (e){
    //     console.log(e)
    //     break
    //   }
    //
    // }

  }
}
