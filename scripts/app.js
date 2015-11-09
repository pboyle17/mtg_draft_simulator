
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

var getCardData = {
  type:'get',
  url:'http://mtgjson.com/json/BFZ-x.json',
  dataType:'JSON',
  success: function(data){
    console.log('success');
    console.dir(data);
    var card=data.cards[Math.floor(Math.random()*301)];

    var commons = [];
    var uncommons = [];
    var rares = [];
    var mythicRares = [];

    for(var x=0; x < data.cards.length;x++){
      if(data.cards[x].rarity=='Common'){
        commons.push(data.cards[x]);
      }
    }

    console.log('done sorting the commons');

    for(var x=0; x < data.cards.length;x++){
      if(data.cards[x].rarity=='Uncommon'){
        uncommons.push(data.cards[x])
      }

    }
    console.log(uncommons);
    console.log('done sorting the uncommons');

    for(var x=0; x < data.cards.length;x++){
      if(data.cards[x].rarity=='Rare'){
        rares.push(data.cards[x]);
      }
    }

    console.log('done sorting the rares');

    for(var x=0; x < data.cards.length;x++){
      if(data.cards[x].rarity=='Mythic Rare'){
        mythicRares.push(data.cards[x]);
      }
    }

    console.log('done sorting the mythic rares');
    var numberOfPacks=8;
    var packs=[];
    for (var i = 0; i < numberOfPacks; i++) {
      packs.push([]);
    }



// console.log(packs);

for(var count=0;count<packs.length;count++){
    //////generating the rare with 1/8 chance of being mythic
        var rngOneInEightChance=Math.floor(Math.random()*8);
        if(rngOneInEightChance==7){
          var rng=Math.floor(Math.random()*mythicRares.length);
          console.log('mythic rare nice:',mythicRares[rng].name);
          packs[count].push(mythicRares[rng]);
        } else {
        var rng=Math.floor(Math.random()*rares.length);
        console.log('rare:',rares[rng].name);
        packs[count].push(rares[rng]);
      }

      for (var i = 0; i < 3 ; i++){
        var rng=Math.floor(Math.random()*uncommons.length);
        if(packs.indexOf(uncommons[rng]) < 0){
        console.log('uncommon:',uncommons[rng].name);
        packs[count].push(uncommons[rng]);
      } else {
        console.log('duplicate card!');
      }
    }

    for (var i = 0; i < 10; i++) {//10 is the nuber of commons per booster
      var rng=Math.floor(Math.random()*commons.length);
        if(packs.indexOf(commons[rng]) < 0) {
        console.log('common:',commons[rng].name);
        packs[count].push(commons[rng]);
      } else {
        console.log('duplicate common');

      }
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
}//end of generating packs loop /////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


  for (var x=0;x<packs[0].length;x++){
    // console.log(packs[0][x]);
    $('#maincontent').append('<img class="card" id="'+packs[0][x].multiverseid+'" src=http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid='+packs[0][x].multiverseid+'&type=card>');
}

  //need to access property to it multiverse id then serach cards for matching multiverse id.


  /////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////picking a card function //////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  var pool=[];
  var cardsPicked=0;



  var pickCard = function (){
    for (var card in data.cards){//looping through all the cards to relate the img to the object.
      if(this.id==data.cards[card].multiverseid){//push the card to your pool array
        pool.push(data.cards[card]);
        for(var things in packs[cardsPicked]){//check for the card in the current booster and take it out of there
          if (this.id==packs[cardsPicked][things].multiverseid){
            packs[cardsPicked].splice(things,1);
          } else {
            console.log('error in the if statement');
          }//end of if statement
        }//end of for loop searching current booster and removing picked card
        $(this).empty();
        console.log('got there')
        //take the booster img elements off the screen
      }// end of if statement
    }//end of for loop
      // console.log(type of id[0]);

    cardsPicked++;//increment so we show the next booster pack

    for (var x=0;x<packs[cardsPicked].length;x++){//print the next booster pack images to the screen, using packs[cardsPicked].multiverse id to search up image link.
      // console.log(packs[cardsPicked][x]);
      //change cards picked in second condition of loop to cardsPicked - 1 to get one less card to simulate player picking a card.

      if(x==0){
      $('#maincontent').html('<img class="card" id="'+packs[cardsPicked][x].multiverseid+'" src=http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid='+packs[cardsPicked][x].multiverseid+'&type=card>').on('click',function(){
        console.log('Hello World');
        pickCard();
      });
  } else {
    $('#maincontent').append('<img class="card" id="'+packs[cardsPicked][x].multiverseid+'" src=http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid='+packs[cardsPicked][x].multiverseid+'&type=card>').on('click',function(){
      console.log('Hello World!');
    });
}

}//end of for-loop

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
  });//end of .card.click event listener/////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////


var firstBooster={};
firstBooster.cards=[];

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////#pool button.click() event listener///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

  $('#pool').click(function(){
   firstBooster.cards.push($('.card').detach());
   console.log(packs[cardsPicked]);


    for(var stuff in pool){
      $('#maincontent').append('<img class="card" id="'+pool[stuff].multiverseid+'" src=http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid='+pool[stuff].multiverseid+'&type=card>');

    }//end of for-in loop
  });// end of #pool.click event listener


  $('#packView').click(function(){
    var poolCards = $('.card').remove;
    console.log('packs 0:',packs[0],'pool cards:',poolCards);


    for (var x=0;x<packs[cardsPicked].length;x++){
      console.log(packs[cardsPicked][x],'count:',x);
      console.log('#'+packs[cardsPicked][x].multiverseid,typeof ('#'+packs[cardsPicked][x].multiverseid) );
      $('#'+packs[cardsPicked][x].multiverseid).click(function(){
        console.log('Hello World!');
      });


      if(x==0){
      $('#maincontent').html('<img class="card" id="'+packs[cardsPicked][x].multiverseid+'" src=http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid='+packs[cardsPicked][x].multiverseid+'&type=card>');
    } else {
      $('#maincontent').append('<img class="card" id="'+packs[cardsPicked][x].multiverseid+'" src=http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid='+packs[cardsPicked][x].multiverseid+'&type=card>')

    }//end of else
  }//end of if-else
  })//end of packView.click() event listener



},//end of sucess function
  error: function(){
    conosle.log('you have an error');
  }

};//end of ajax call
