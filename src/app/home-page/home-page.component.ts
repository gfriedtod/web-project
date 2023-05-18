
import {Component, OnInit} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

//import {Keyboard} from "swiper";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('carossel' ,[
        transition(':enter , :increment',[
          animate('5s' ,keyframes([
                style({ transform: 'translateX(-100%)', offset: 0 }),
                style({ transform: 'translateX(0)', offset: 0.5 }),
                //style({ transform: 'translateX(100%)', offset: 1 }),

                //  style({ transform: 'translat eX(0%)', offset: 1 })
              ],
            )

          )]),


        transition(':leave , :decrement',[
          animate('5s' ,keyframes([
                style({ transform: 'translateX(0)', offset: 0 }),
                style({ transform: 'translateX(-100%)', offset: 0.5 }),
                //style({ transform: 'translateX(100%)', offset: 1 }),

                //  style({ transform: 'translat eX(0%)', offset: 1 })
              ],
            )

          )])
      ]
    ),

    trigger('carossely' ,[
        transition(':enter , :increment',[
          animate('5s' ,keyframes([
                style({ transform: 'translateY(-100%)', offset: 0 }),
                style({ transform: 'translateX(0)', offset: 0.5 }),
                //style({ transform: 'translateX(100%)', offset: 1 }),

                //  style({ transform: 'translat eX(0%)', offset: 1 })
              ],
            )

          )]),


        transition(':leave',[
          animate('5s' ,keyframes([
                style({ transform: 'translateY(0)', offset: 0 }),
                style({ transform: 'translateY(-100%)', offset: 0.5 }),
                //style({ transform: 'translateX(100%)', offset: 1 }),

                //  style({ transform: 'translat eX(0%)', offset: 1 })
              ],
            )

          )])
      ]
    ),
    trigger('fade-text' ,[
        transition( ':enter', [

            animate( '1s' ,keyframes([
                  style( { transform :' translateX(15%)' , offset:0}),
                  style( { transform :' translateX(0%)' , offset:1})
                ]
              )
            )
          ]
        ),
        transition( ':leave',[
          animate( '1s' , keyframes([
            style({ opacity : 1 , offset : 0}),
            style({ opacity : 0.7 , offset : 0.3}),
            style({ opacity : 0.3 , offset : 0.5}),
            style({ opacity : 0 , offset : 1}),
          ]))
        ])
      ]
    ),
    trigger('fade-text-des' ,[
        transition( ':enter', [

            animate( '1s' ,keyframes([
                  style( { transform :' translatey(5%)' , offset:0}),
                  style( { transform :' translatey(0%)' , offset:1})
                ]
              )
            )
          ]
        ),
        // transition( ':leave',[
        //   animate( '1s' , keyframes([
        //     style({ opacity : 1 , offset : 0}),
        //     style({ opacity : 0.7 , offset : 0.3}),
        //     style({ opacity : 0.3 , offset : 0.5}),
        //     style({ opacity : 0 , offset : 1}),
        //   ]))
        // ])
      ]
    ),
    trigger('bub-style' ,[
      transition( ':increment',[
        animate( '0.5s' ,
          style( {transform: 'scaleY(7)' } ),

        )
      ]) ,
      // transition( ':decrement',[
      //   animate( '0.5s' ,keyframes([
      //     style({  transform: 'scaleY(7)' , offset :0  }),
      //     style({  transform: 'scaleY(0)' , offset :1  })
      //   ]))
      // ])
    ]),

    trigger('scale',[
      transition( 'false => true',[
        animate('2s', style( {transform :'scale(2)'}))
      ])
    ]),

    trigger('fade-left-contain' ,[
      transition( ':enter', [

          animate( '2s' ,keyframes([
                style( { transform :' translateX(100%)' , offset:0}),
                style( { transform :' translateX(0%)' , offset:1})
              ]
            )
          )
        ]
      ),
      // transition( ':leave',[
      //   animate( '2s' , keyframes([
      //     style({ opacity : 1 , offset : 0}),
      //     style({ opacity : 0.7 , offset : 0.3}),
      //     style({ opacity : 0.3 , offset : 0.5}),
      //     style({ opacity : 0 , offset : 1}),
      //   ]))
      // ])
    ]),
    trigger('fade-left-item1' ,[
      transition( ':enter', [

          animate( '2s' ,keyframes([
                style( { transform :' translateX(200%)' , offset:0}),
                style( { transform :' translateX(0%)' , offset:1})
              ]
            )
          )
        ]
      ),
      // transition( ':leave',[
      //   animate( '2s' , keyframes([
      //     style({ opacity : 1 , offset : 0}),
      //     style({ opacity : 0.7 , offset : 0.3}),
      //     style({ opacity : 0.3 , offset : 0.5}),
      //     style({ opacity : 0 , offset : 1}),
      //   ]))
      // ])
    ])
  ]







})
export class HomePageComponent implements  OnInit{
  sub_im!: string;
  state!: number;
  image = [
    {image : "assets/building1.jpg" , text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta dolore, dolorem ducimus ipsam obcaecati pariatur possimus temporibus ullam unde!" , title:"Vision"},
    {image : "assets/building2.jpg" , text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta dolore, dolorem ducimus ipsam obcaecati pariatur possimus temporibus ullam unde!" , title:"but"},
    {image : "assets/building4.jpg" , text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta dolore, dolorem ducimus ipsam obcaecati pariatur possimus temporibus ullam unde!" , title:"objectif"},
    {image : "assets/building3.jpg" , text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta dolore, dolorem ducimus ipsam obcaecati pariatur possimus temporibus ullam unde!" , title:"Vision"},
    {image : "assets/building6.jpg" , text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta dolore, dolorem ducimus ipsam obcaecati pariatur possimus temporibus ullam unde!" , title:"Vision"},


  ]

  index!: number
  // slindexeConfig: SlickCarouselConfig;
  items = [

    { title: 'Item 1', image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg' },
    { title: 'Item 2', image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg' },
    { title: 'Item 3', image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg' },
    { title: 'Item 2', image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg' },
    { title: 'Item 3', image: 'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/191008-cantines-scolaires-pam-haiti.jpg/image1024x768.jpg' },

  ];
  sub_ims: any;
  states!: number;

  ngOnInit() {
    this.state=1
    this.index =0
    this.states =1;

    this.sub_im = this.image[0].image
    this.sub_ims=[ { image: "https://wp.fr.aleteia.org/wp-content/uploads/sites/6/2016/10/web-arturo-sosa-superior-rome-italy-c2a9alessia-giuliani-cpp.jpg?w=620&h=348&crop=1"} ,

      { image: "https://wp.fr.aleteia.org/wp-content/uploads/sites/6/2016/10/web-arturo-sosa-superior-rome-italy-c2a9alessia-giuliani-cpp.jpg?w=620&h=348&crop=1"} ,
      { image: "https://wp.fr.aleteia.org/wp-content/uploads/sites/6/2016/10/web-arturo-sosa-superior-rome-italy-c2a9alessia-giuliani-cpp.jpg?w=620&h=348&crop=1"} ,
      { image: "https://wp.fr.aleteia.org/wp-content/uploads/sites/6/2016/10/web-arturo-sosa-superior-rome-italy-c2a9alessia-giuliani-cpp.jpg?w=620&h=348&crop=1"} ,
      { image: "https://wp.fr.aleteia.org/wp-content/uploads/sites/6/2016/10/web-arturo-sosa-superior-rome-italy-c2a9alessia-giuliani-cpp.jpg?w=620&h=348&crop=1"} ,]
  }




  goLeft() {




    // this.item = this.items[this.i--]
    // console.log('click')
    console.log(this.index)
    if(this.index >0) {

      this.sub_im =this.image[this.index].image
      this.index--
    }
  }

  goRigth() {

    console.log(this.index)
    if ( this.index < this.image.length-1) {

      this.sub_im =this.image[this.index].image
      this.index++




    }


  }


  scalein() {
    this.state = 1.5
  }

  scaleout(){
    this.state =1
  }
}


