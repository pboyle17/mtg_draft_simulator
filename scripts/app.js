///lines 129 trying to add card images to the screen possibly have pushed the names of the object to the different rarity arrays instead of the objects themselves.


$(document).ready(function(){
  console.log('jQuery is working!');

  $button=$('button');

  $button.click(function(){
    // console.log('button is working');
    // $('#sidebar').append('<br>'+outnumber.cardName);
    console.log('button works!');
  });//end of button.click()

  $.ajax(getCardData);

});//end of document.ready()

// console.log('loading..');
//
// function card(cardName,cardPictureUrl){
//   this.cardName=cardName;
//   this.cardPicture=cardPictureUrl;
//
//
//   this.initialize=function(){
//     console.log('intializing...');
//     $('#sidebar').append('<br>'+cardName);
//     console.log('<img src='+cardPictureUrl+'>');
//     $('#maincontent').append('<img src='+cardPictureUrl+'>');
//   }//end of intialize method
// }//end of card constructor

// dont need this now that i have ajax!!!!!!!!!!!!
//  var outnumber = new card('Outnumber','http://mythicspoiler.com/bfz/cards/outnumber.jpg');
//  var undergrowthChampion= new card('Undergrowth Champion','http://mythicspoiler.com/bfz/cards/undergrowthchampion.jpg');
//  var dranaLiberatorOfMalakir= new card ('Drana, Liberator of Malakir','http://www.mythicspoiler.com/bfz/cards/dranaliberatorofmalakir.jpg');
//   var windriderPatrol= new card ('Windrider Patrol','http://www.mythicspoiler.com/bfz/cards/windriderpatrol.jpg');
// var eldraziSkyspawner = new card ('Eldrazi Skyspawner','http://www.mythicspoiler.com/bfz/cards/eldraziskyspawner.jpg');


var getCardData = {
  type:'get',
  url:'http://mtgjson.com/json/BFZ-x.json',
  dataType:'JSON',
  success: function(data){
    console.log('success');
    console.dir(data);
    var card=data.cards[Math.floor(Math.random()*301)];


    // console.log('name:',card.name,'rarity:',card.rarity);

    var commons = [];
    var uncommons = [];
    var rares = [];
    var mythicRares = [];
    var pack = [];



    // console.log('data.cards:',data.cards,'type of:',typeof(data.cards));
    // console.log('data.cards[3]',data.cards[3],'typeof: data.cards[3].rarity',typeof(data.cards[3].rarity));


    for(var x=0; x < data.cards.length;x++){
      if(data.cards[x].rarity=='Common'){
        // console.log(typeof data.cards[x].rarity);
        // console.log(data.cards[x].rarity);
        commons.push(data.cards[x]);
      }
    }

    console.log('done sorting the commons');

    for(var x=0; x < data.cards.length;x++){
      if(data.cards[x].rarity=='Uncommon'){
        // console.log(typeof data.cards[x].rarity);
        // console.log(data.cards[x].rarity);
        uncommons.push(data.cards[x])
      }

    }
    console.log(uncommons);
    console.log('done sorting the uncommons');

    for(var x=0; x < data.cards.length;x++){
      if(data.cards[x].rarity=='Rare'){
        // console.log(typeof data.cards[x].rarity);
        // console.log(data.cards[x].rarity);
        rares.push(data.cards[x]);
      }
    }

    console.log('done sorting the rares');

    for(var x=0; x < data.cards.length;x++){
      if(data.cards[x].rarity=='Mythic Rare'){
        // console.log(typeof data.cards[x].rarity);
        // console.log(data.cards[x].rarity);
        mythicRares.push(data.cards[x]);
      }
    }

    console.log('done sorting the mythic rares');

    // console.log(commons);
    // console.log(uncommons);
    // console.log(rares);
    // console.log(mythicRares);

    //////generating the rare with 1/8 chance of being mythic
        var rngOneInEightChance=Math.floor(Math.random()*8);
        if(rngOneInEightChance==7){
          var rng=Math.floor(Math.random()*mythicRares.length);
          console.log('mythic rare nice:',mythicRares[rng].name);
          pack.push(mythicRares[rng]);
        } else {
        var rng=Math.floor(Math.random()*rares.length);
        console.log('rare:',rares[rng].name);
        pack.push(rares[rng]);
      }

      for (var i = 0; i < 3 ; i++){
      var rng=Math.floor(Math.random()*uncommons.length);
      console.log('uncommon:',uncommons[rng].name);
      pack.push(uncommons[rng]);
    }

    for (var i = 0; i < 10; i++) {
      var rng=Math.floor(Math.random()*commons.length);
      console.log('common:',commons[rng].name);
      pack.push(commons[rng]);
    }



  console.log(pack);


console.log(pack[0].multiverseid);
  // $('#main-content').append('Hello World!');

  for (var x in pack){
    $('#maincontent').append('<img class="card" src=http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid='+pack[x].multiverseid+'&type=card>');
}
  // console.log(data.cards[0].cards.multiverseid);



},//end of sucess function
  error: function(){
    conosle.log('you have an error');
  }

};





//End of initialization




// window.onload=function(){
//   console.log('javascript is working');
//   console.log('all files that this page needs has been loaded');
//
//
//
//
//
//
// }//end of window.onload function
//
// var btn=document.getElementById('button');
// btn.onclick = function () {
// var rng = Math.floor(Math.random()*5);
// console.log(bfz[rng].name);
//
// }//end of btn
//
// function card(cardName,cardType,cardPictureUrl,cardColor,idNumber){
//   this.cardName=cardName;
//   this.cardType=cardType;
//   this.cardPictureUrl=cardPictureUrl;
//   this.cardColor=cardColor;
//   this.idNumber
//   this.initialize=function(domElement){
//     this.domElement=document.createElement(domElement);
//
//   }// end of intialize method
//   this.render(picture){
//     this.picture;
//     this.selector.appendChild(this.picture);
//   }
//
//
//
// }// end of card Constructor function
//
// //new instance of Constructor Blueprint Card
// var bfz = [stasisSnare,prairieStream,cinderGlade,outnumber,eldraziSkyspawner];
//
// var stasisSnare=new card('Stasis Snare','enchantment','https://crazyaboutmtg.files.wordpress.com/2015/09/statis-snare.png?w=625','white',1);
//
// var prairieStream=new card('Prairie Stream','land','http://i.imgur.com/mSQa1Jk.jpg','colorless',2);
//
// var cinderGlade= new card ('CinderGlade','land','http://i.imgur.com/mSQa1Jk.jpg','colorless',3);
//
// var outnumber = new card ('Outnumber','instant','http://crystalcommerce-assets.s3.amazonaws.com/photos/4243863/large/en_aZv8lOUPKt.png?1442602671','red',4);
//
// var eldraziSkyspawner = new card ('Eldrazi Skyspawner','http://crystalcommerce-assets.s3.amazonaws.com/photos/4242103/large/en_pfw5ha4zkw.png?1442599737','devoid',5);
//
//
// var maincontent=document.getElementById('maincontent');
// // console.log(maincontent);
// var img = document.createElement('img');
// // console.log(img);
// img.src=this.cardPictureUrl;
// img.style.display='inline-block';
//
// // console.log(img.src);
//
//
//
//
// //declare a selector called maincontent
// //   var maincontent=document.getElementById('maincontent');
// //
// //   console.log(maincontent);
// //
// //   var monsters=['Wreck it Ralph','The giraffe from lion king snes','Gannon'];
// //
// //   for (var baddie in monsters){
// //     var li = document.createElement('li')
// //     console.log(li);
// //     //create a new dom element using document.createElement('name-of-tag')
// //     li.innerHTML = monsters[baddie];
// //     //aapend to container usings selector.appendChild(domElement);
// //     maincontent.appendChild(li);
// //   } //end of for-in loop
// //
// //  //now , we need to create an imgage
// //  //var kittenImage=document.createElement('img');
// //  //alt text - ADA compliancy text for the blind
// //  //kittenImage.alt='a cute random kitten';
// //  //src=image srouce
// //  //kittenImage.src='http://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16122946-1280-800.jpg';
// //
// //  //append my element as a child to a selector
// // // maincontent.appendChild(kittenImage);
// //
// //  //modify the cuteness level of the kitten
// //  //kittenImage.id='kitten';
// // // var kitten = document.querySelector('#kitten')
// //
// //  //kitten.src='http://www.deshow.net/d/file/animal/2009-07/cute-kitten-631-2.jpg'
// //
// // // var listItemsArray = document.getElementsByTagName('li');
// //  //console.log(listItemsArray);
// //
// //  //for (var li in listItemsArray){
// //    //listItemsArray[li].innerHTML = 'We are the champions (my friend)';
// //  //}
// //
// //  var status=document.getElementById('status-message');
// // var btn=document.getElementById('addPoint')
// //
// // //intialize UI component
// // user.initialize(status);
// // btn.addEventListener('click',function(){
// //   user.updateScoreByOnePoint();
// // });
// //
// // // //must wrap in ana. function otherwise will only run once on first click
// // // user.initialize(status);
// // // btn.addEventListener('click',user.updateScoreByOnePoint());
// //
// //
// //
// //  //bind event to a DOM element
// //  //var body = document.getElementsByTagName('body')[0];
// //  //mouse events
// //  //body.addEventListener('click', function() {
// //    //console.log('oww dont taze me bro!');
// //  //});
// //  //touchstart
// //  //touchmove
// //  //touchend
// //  //console.log(event)
// //  //touch events
// // //body.addEventListener('touchstart',function(event){
// //   //console.log('yoyoyo y you poking me bro? wtf!');
// // //});
// // //keyboard event
// // //body.addEventListener('keyup',function(event){
// //   // look for specific keys to be pressed
// //   //if(event.keyCode == 13){
// //     //console.log('why you press enter so much yo')
// //   //}
// //   //console.log(event.keyCode);
// //
// //
// // //})
// //
// //
// //
// //
// //
//
// // //mouse events stored in an array, how to remove an event listener
// //
// // //create an object that can update itself and visually show that if needed.
// //
// // //ex. 1: user component
// //
// // var user = {
// //   name: null ,
// //   score: 0,
// //   domElement: null,
// //
// //   initialize:function(elementToAppendTo){
// //     if(this.name==null) {
// //       this.name=prompt('What is your name?')
// //     }
// //     this.domElement=document.createElement('div');
// //     elementToAppendTo.appendChild(this.domElement);
// //
// //     console.log('initialize: complete');
// //   },
// //
// //   render:function(innerHTML){
// //     if(typeof(innerHTML)=='string'){
// //       this.domElement.innerHTML = innerHTML;
// //     }
// //   },
// // //valid html to place into our dom element
// //   getName:function(){
// //     return this.name
// //
// //   },
// //
// // //setter or mutators setting an interal value update a value
// //   saveName:function(newName){
// //     if (typeof(newName)=='string'&&newName.length>0){
// //       this.name=newName;
// //     } else {
// //       alert('you entered an incorrect or empty name');
// //     }
// //   },
// //
// //   getScore:function() {
// //     return this.score
// //   },
// //
// //   updateScoreByOnePoint: function(){
// //     this.score++;
// //     var status=this.buildPlayerStatusString();
// //     this.render(status);
// //     console.log(this.score);
// //     return this.score;
// //   },
// //
// //   buildPlayerStatusString:function() {
// //     return this.name + ': '+this.score;
// //   }
// //
// //
// //
// // } //end of user object
// //
// //
// //
// // //boiler-plate for a user interface component
// // var component = {
// //   initialize:function(){
// //     //create a DOM element
// //     //attach it
// //     this.domElement=document.createElement('div');
// //     selector.appendChild(this.domElement);
// //
// //   },
// //   render:function(statusText){
// //     //update the DOM element
// //     this.domElement.innerHTML=statusText;
// //   }
// // };
