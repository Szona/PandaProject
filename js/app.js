$(document).ready(function() {

  // variables
  var enviroment = $('.enviroment');
  var dayBtn = $('.weather').find('.sun');
  var nightBtn = $('.weather').find('.moon');
  var rainBtn = $('.weather').find('.rain');
  var dropNum = 500;
  var factsSource = [{
          fact: "The life span of giant pandas in the wild is approximately 20 years. Captive pandas may live to be 25-30 years old."
      },
      {
          fact: "The eyespots of a giant panda cub are initially in the shape of a circle. As the cub grows, the circles become shaped like a teardrop."
      },
      {
          fact: "The giant panda has been on the endangered species list since 1990. The most significant threats to pandas are habitat loss and poaching. China is only approximately 5% greater than the U.S. in area but has four times the population."
      },
      {
          fact: "Pandas have been a symbol of peace in China. For example, hundreds of years ago, warring tribes in China would raise a flag with a picture of a panda on it to stop a battle or call a truce."
      },
      {
          fact: "Giant pandas are on the brink of extinction, with just over 1,000 pandas left in the world. Scientists are hoping to increase the wild panda population to 5,000 by 2025."
      },
      {
          fact: "The red panda and the giant panda share the same habitat and diet, and both animals are also endangered. Scientific tests show that the red panda is in the raccoon family while the giant panda is in the bear family. Some scientists believe that the giant panda is so special that it should belong to its own family group."
      },
      {
          fact: "The panda was once an all-white bear. When a small girl tried to save a panda cub from being attacked by a leopard, the leopard killed the girl instead. Pandas came to funeral wearing armbands of black ashes. As they wiped their eyes, hugged each other, and covered the ears, they smudged the black ashes."
      },
      {
          fact: "Pandas can stand upright, but their short hind legs aren’t strong enough to support their bodies. A panda’s bones are twice as heavy as the bones of other animals the same size."
      },
      {
          fact: "Pandas are pigeon-toed; in other words, they walk with their front paws turned inward."
      },
      {
          fact: "Pandas do not run fast—a slow trot is as fast as they can go. The fastest bear is the black bear, which can run 35 miles per hour. That’s about as a fast as a horse or deer."
      },
      {
          fact: "Pandas rely less on visual memory than they do on spatial memory to locate a mate’s home range area and preferred patches of bamboo. Spatial memory is defined as the ability to remember a location."
      },
  ];
  var factBtn = $('.fact-button');
  var fact = $('.fact-content').text();
  var newFactText = '';
  var sourceLength = factsSource.length;
  var timeAnimation = 500;
  var factContainer = $('.fact-content');


// weather control

//day nad night
  function dayMode() {
    dayBtn.on('click', function(e) {
      console.log("click");
      enviroment.removeClass('night-mode').addClass('day-mode');
    });
  }

  function nightMode() {
    nightBtn.on('click', function(e) {
      enviroment.removeClass('day-mode').addClass('night-mode');
    });
  }

//rain
  function randRange(minNum, maxNum) {
      return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }

  function Drop() {
    for(var i = 1; i <dropNum; i++) {
      var dropLeft = randRange(0, 1600);
      var dropTop = randRange(-1000, 1400);

      enviroment.append('<div class="drop" id="drop' + i + '"></div>')

      $('#drop' + i).css('left', dropLeft);
      $('#drop' + i).css('top', dropTop);
    }
    setTimeout(function() {
        $('.drop').remove();
    }, 3000);
  }

  function setRain() {
    rainBtn.on('click', function(e) {
      Drop();
    });
  }

  //randomFacts

  function factAnimation() {
    factContainer.fadeOut(timeAnimation, function() {
      factContainer.html('');
      factContainer.html(newFactText);
      factContainer.fadeIn(timeAnimation);
    });
  }

  function randomFacts() {
    factBtn.on('click', function(e){
      e.preventDefault();
        var randomNumber = Math.floor(Math.random() * sourceLength);
        for(var i = 0; i <= sourceLength; i++) {
          newFactText = factsSource[randomNumber].fact;
          factAnimation();
          break;
        }
      });
  }


// //drag and drop
  var drop = $('#drop');
  var sticks = $('.stick-container');

  sticks.each(function(){
     $(this).attr("dragable", 'true');
   });

   drop.on("dragover",function(e){
    e.preventDefault();
  });

  sticks.on("dragstart",function(e){
    e.originalEvent.dataTransfer.setData("Text",e.target.id);
  });

  drop.on("drop",function(e){
    e.preventDefault();
    var data=e.originalEvent.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(data));
  });

  dayMode();
  nightMode();
  setRain();
  randomFacts();
});
