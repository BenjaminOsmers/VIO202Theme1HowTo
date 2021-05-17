var $navigation = $('.icons');
var $nav = $('nav');
var $nav_full = $('.fp-slidesNav');
var scroll = true;

var check1 = true, check2 = false, check3 = false, check4 = false, check5 = false, check6 = false, check7 = false, check8 = false, check9 = false, check10 = false;

var $isAnimatedSecondL = $(".st1 .is-animated-left"), $isAnimatedSecondR = $(".st1 .is-animated-right");
var $isAnimatedThirdL = $(".st2 .is-animated-left"), $isAnimatedThirdR = $(".st2 .is-animated-right");
var $isAnimatedFourthL = $(".st3 .is-animated-left"), $isAnimatedFourthR = $(".st3 .is-animated-right");
var $isAnimatedFifthL = $(".st4 .is-animated-left"), $isAnimatedFifthR = $(".st4 .is-animated-right");
var $isAnimatedSixthL = $(".st5 .is-animated-left"), $isAnimatedSixthR = $(".st5 .is-animated-right");
var $isAnimatedSeventhL = $(".st6 .is-animated-left"), $isAnimatedSeventhR = $(".st6 .is-animated-right");
var $isAnimatedEighthL = $(".st7 .is-animated-left"), $isAnimatedEighthR = $(".st7 .is-animated-right");
var $isAnimatedNinthL = $(".st8 .is-animated-left"), $isAnimatedNinthR = $(".st8 .is-animated-right");
var $isAnimatedTenthL = $(".st9 .is-animated-left"), $isAnimatedTenthR = $(".st9 .is-animated-right");

$navigation.find('a').on('click', function() {
  $(this).parent().parent().toggleClass('open-menu');

  $('#fp-nav').toggle();
  $("header").css("background-color", "rgba(0, 0, 0, 0.6)");
});
 
$('#fullpage').fullpage({
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['topSection', 'firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthsection', 'seventhsection', 'eighthsection', 'ninthsection'],
  menu: '#menu',

  onLeave: function (index, nextIndex, direction) {
    // first animation
    console.log('index: ' + index);
    console.log('next index: ' + nextIndex);
    if (index == 1 && nextIndex == 2) {
      $isAnimatedSecondL.addClass('animate__animated animate__slideInLeft');
      $isAnimatedSecondR.addClass('animate__animated animate__slideInRight');
    }

    // // second animation
    else if ((index == 1 || index == 2) && nextIndex == 3) {
      $isAnimatedThirdL.addClass('animate__animated animate__slideInLeft');
      $isAnimatedThirdR.addClass('animate__animated animate__slideInRight');
    }
    
    // // third animation
    else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4) {
      $isAnimatedFourthL.addClass('animate__animated animate__slideInLeft');
      $isAnimatedFourthR.addClass('animate__animated animate__slideInRight');
    }
    
    // // Fourth animation
    else if ((index == 1 || index == 2 || index == 3 || index == 4) && nextIndex == 5) {
      $isAnimatedFifthL.addClass('animate__animated animate__slideInLeft');
      $isAnimatedFifthR.addClass('animate__animated animate__slideInRight');
    }
    
    // // Fifth animation
    else if ((index == 1 || index == 2 || index == 3 || index == 4 || index == 5) && nextIndex == 6) {
      $isAnimatedSixthL.addClass('animate__animated animate__slideInLeft');
      $isAnimatedSixthR.addClass('animate__animated animate__slideInRight');
    }
    
    // // Sixth animation
    else if ((index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6) && nextIndex == 7) {
      $isAnimatedSeventhL.addClass('animate__animated animate__slideInLeft');
      $isAnimatedSeventhR.addClass('animate__animated animate__slideInRight');
    }
    
    // // Seventh animation
    else if ((index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7) && nextIndex == 8) {
      $isAnimatedEighthL.addClass('animate__animated animate__slideInLeft');
      $isAnimatedEighthR.addClass('animate__animated animate__slideInRight');
    }
    
    // // Eighth animation
    else if ((index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8) && nextIndex == 9) {
      $isAnimatedNinthL.addClass('animate__animated animate__slideInLeft');
      $isAnimatedNinthR.addClass('animate__animated animate__slideInRight');
    }
    
    // // Ninth animation
    else if ((index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8 || index == 9)&& nextIndex == 10) {
      $isAnimatedTenthL.addClass('animate__animated animate__heartBeat');
      $isAnimatedTenthR.addClass('animate__animated animate__heartBeat');
    }
  },

  afterLoad: function(anchorLink, index) {
    $nav.css('background', 'rgba(0, 0, 0, .6)');
  }
});

// checkboxes
// step1
$('#step1').on('click', "input", function() {
  $(this).attr('disabled', true);
  $(this).parent().parent().next().find('input').attr('disabled', false);
  $(this).parent().next().find('p').css("background-size", "100% 5px");

  if($(this).hasClass('last')) {
    var html = $(".s1");

    $(html).fadeOut("slow", function() {
      $(html).replaceWith('<div class="nextDiv s1"><h3 class="nextHead">Awesome!</h3><a href="#secondSection" class="nextBtn">Next Step</a></div>');
      $(html).fadeIn("slow");
    });
  }
});

// step2
$('#step2').on('click', "input", function() {
  $(this).attr('disabled', true);
  $(this).parent().parent().next().find('input').attr('disabled', false);
  $(this).parent().next().find('p').css("background-size", "100% 5px");

  if($(this).hasClass('last')) {
    var html = $(".s2");

    $(html).fadeOut("slow", function() {
      $(html).replaceWith('<div class="nextDiv s2"><h3 class="nextHead">Awesome!</h3><a href="#thirdSection" class="nextBtn">Next Step</a></div>');
      $(html).fadeIn("slow");
    });

    scroll = true;
  }
});

// step3
$('#step3').on('click', "input", function() {
  $(this).attr('disabled', true);
  $(this).parent().parent().next().find('input').attr('disabled', false);
  $(this).parent().next().find('p').css("background-size", "100% 5px");

  if($(this).hasClass('last')) {
    var html = $(".s3");

    $(html).fadeOut("slow", function() {
      $(html).replaceWith('<div class="nextDiv s3"><h3 class="nextHead">Awesome!</h3><a href="#fourthSection" class="nextBtn">Next Step</a></div>');
      $(html).fadeIn("slow");
    });

    scroll = true;
  }
});

// step4
$('#step4').on('click', "input", function() {
  $(this).attr('disabled', true);
  $(this).parent().parent().next().find('input').attr('disabled', false);
  $(this).parent().next().find('p').css("background-size", "100% 5px");

  if($(this).hasClass('last')) {
    var html = $(".s4");

    $(html).fadeOut("slow", function() {
      $(html).replaceWith('<div class="nextDiv s4"><h3 class="nextHead">Awesome!</h3><a href="#fifthSection" class="nextBtn">Next Step</a></div>');
      $(html).fadeIn("slow");
    });
    scroll = true;
  }
});

// step5
$('#step5').on('click', "input", function() {
  $(this).attr('disabled', true);
  $(this).parent().parent().next().find('input').attr('disabled', false);
  $(this).parent().next().find('p').css("background-size", "100% 5px");

  if($(this).hasClass('last')) {
    var html = $(".s5");

    $(html).fadeOut("slow", function() {
      $(html).replaceWith('<div class="nextDiv s5"><h3 class="nextHead">Awesome!</h3><a href="#sixthsection" class="nextBtn">Next Step</a></div>');
      $(html).fadeIn("slow");
    });

    scroll = true;
  }
});

// step6
$('#step6').on('click', "input", function() {
  $(this).attr('disabled', true);
  $(this).parent().parent().next().find('input').attr('disabled', false);
  $(this).parent().next().find('p').css("background-size", "100% 5px");

  if($(this).hasClass('last')) {
    var html = $(".s6");

    $(html).fadeOut("slow", function() {
      $(html).replaceWith('<div class="nextDiv s6"><h3 class="nextHead">Awesome!</h3><a href="#seventhsection" class="nextBtn">Next Step</a></div>');
      $(html).fadeIn("slow");
    });

    scroll = true;
  }
});

// step8
var s8c1 = $("input[name='s8check1']");
var s8c1p = $("#step8 .c1 p");

$(s8c1).click(function() {
  $(s8c1).attr('disabled', true);
  $(s8c1p).css("background-size", "100% 5px");

  var s8html = $(".img-div");
  var s8time = $(".time-container");

  $(s8html).fadeOut("slow", function() {
    $(s8html).css('display', 'none');
    $(s8time).css('display', 'flex');
    $(s8time).fadeIn("slow");
  });
});

var audio = new Audio('../img/oven.mp3');
const displayOutput = document.querySelector('.display-remain-time');
const pauseBtn = document.getElementById('pause');

let intervalTimer;
let timeLeft;
let wholeTime = 3; 
let isPaused = false;
let isStarted = false;

displayTimeLeft(wholeTime);

function timer (seconds){
  let remainTime = Date.now() + (seconds * 1000);
  displayTimeLeft(seconds);
  
  intervalTimer = setInterval(function(){
    timeLeft = Math.round((remainTime - Date.now()) / 1000);
    if(timeLeft <= 0){
      clearInterval(intervalTimer);
      isStarted = false;
      displayTimeLeft(0);
      audio.play();
      pauseBtn.classList.remove('pause');
      pauseBtn.classList.add('play');

      var s8html = $(".s8");
      $(s8html).fadeOut("slow", function() {
        $(s8html).replaceWith('<div class="nextDiv s8"><h3 class="nextHead">All Done!!</h3><a href="#ninthsection" class="nextBtn">Next Step</a></div>');
        $(s8html).fadeIn("slow");
      });

      scroll = true;

      return ;
    }
    displayTimeLeft(timeLeft);
  }, 1000);
}

function pauseTimer(event){
  if(isStarted === false){
    timer(wholeTime);
    isStarted = true;
    this.classList.remove('play');
    this.classList.add('pause');
  }else if(isPaused){
    this.classList.remove('play');
    this.classList.add('pause');
    timer(timeLeft);
    isPaused = isPaused ? false : true
  }else{
    this.classList.remove('pause');
    this.classList.add('play');
    clearInterval(intervalTimer);
    isPaused = isPaused ? false : true ;
  }
}

function displayTimeLeft (timeLeft){
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  displayOutput.textContent = displayString;
}

pauseBtn.addEventListener('click', pauseTimer);

// select pizza
const pizzaObject = {
  Pizzas: [
  {
    name: 'Four Seasons',
    ingredients: [{in: 'Pepperoni', class: ' first'}, {in: 'Mushroom', class: ''}, {in: 'Olives', class: ''}, {in: 'Green Pepper', class: ''}, {in: 'Onion', class: ''}, {in: 'Mozzerella Cheese', class: ' last'}]
  },
  {
    name: 'Pepperoni',
    ingredients: [{in: 'Pepperoni', class: ' first'}, {in: 'Marinara Sauce', class: ''}, {in: 'Mozzerella Cheese', class: ' last'}]
  },
  {
    name: 'BBQ Chicken',
    ingredients: [{in: 'Chicken', class: ' first'}, {in: 'Mushroom', class: ''}, {in: 'Onion', class: ''}, {in: 'BBQ Sauce', class: ''}, {in: 'Spring Onion', class: ''}, {in: 'Mozzerella Cheese', class: ' last'}]
  }
]
};

$('.topping-link').on('click', function() {
  var content = $('.step7 .circle');

  $(content).fadeOut("slow", function() {
    $(content).html(`<div class="splide">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
          <div class="splide__slide__container">
            <h3 class="pizza-head">Four Seasons</h3>
            <button class="pizzaselect pizza1">Select</button>
          </div>
        </li>
        <li class="splide__slide">
          <div class="splide__slide__container">
            <h3 class="pizza-head">Pepperoni</h3>
            <button class="pizzaselect pizza3">Select</button>
          </div>
        </li>
        <li class="splide__slide">
          <div class="splide__slide__container">
            <h3 class="pizza-head">BBQ Chicken</h3>
            <button class="pizzaselect pizza2">Select</button>
          </div>
        </li>
      </ul>
    </div>
  </div>`);
    $(content).fadeIn("slow");

    new Splide( '.splide' ).mount();
  });
});

$('.step7').on('click', '.pizzaselect', function() {
  var bodyList = $('#step7 .col--btm');
  var head = $('.pizzas h2');
  var pName = $(this).prev().html();

  var returnedData = $.grep(pizzaObject.Pizzas, function (element, index) {
    return element.name == pName;
  });

  var ingrStr = "";
  var ingr = returnedData[0].ingredients;
  $.each(ingr, function(i, ingredient) {
    if(ingredient.class != ' first'){
      ingrStr +=  `<li>
                      <div class="input${ingredient.class}"><input type="checkbox" name="s7check1" id="" disabled/></div>
                      <div class="content c1 v1">
                        <p>${ingredient.in}</p>
                      </div>
                    </li>`;
    } else if(ingredient.class == ' first') {
      ingrStr +=  `<li>
                      <div class="input${ingredient.class}"><input type="checkbox" name="s7check1" id="" /></div>
                      <div class="content c1 v1">
                        <p>${ingredient.in}</p>
                      </div>
                    </li>`;
    }
  });

  $(head).fadeOut("slow", function() {
    $(head).html(returnedData[0].name);
    $(head).fadeIn("slow");
  });

  $(bodyList).fadeOut("slow", function() {
    $(bodyList).html(`<ul>${ingrStr}</ul>`);
    $(this).fadeIn("slow");
  });

  $('#step7').on('click', "input", function() {
    $(this).attr('disabled', true);
    $(this).parent().parent().next().find('input').attr('disabled', false);
    $(this).parent().next().find('p').css("background-size", "100% 5px");

    if($(this).parent().hasClass('last')) {
      var html = $(".s7");
  
      $(html).fadeOut("slow", function() {
        $(html).html('<div class="nextDiv s7"><h3 class="nextHead">Awesome!</h3><a href="#eighthsection" class="nextBtn">Next Step</a></div>');
        $(html).fadeIn("slow");
      });

      scroll = true;
    }
  });
});