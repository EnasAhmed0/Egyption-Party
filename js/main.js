 /// <reference types="../@types/jquery">

//  with jquery
//  $(document).ready(function () {
//    $('#flip').click(function () {
//      $('#panel').slideToggle('slow');
//    });
//  });


// loading
$(function() {
  $('.loading').fadeOut(1000 ,function(){
    $('.loading').slideUp(1000 , function(){
      $('body').css('overflow','auto');
          $('.loading').remove();
    });
    });
  } );

$(document).ready(function () {
  // Function to open the side navigation
  function openNav() {
    $('#mySidenav').css('width', '250px');
  }

  // Function to close the side navigation
  function closeNav() {
    $('#mySidenav').css('width', '0');
  }

  // Open side nav when the open button is clicked
  $('.openbtn').on('click', function () {
    openNav();
  });

  // Close side nav when the close button is clicked
  $('.sidenav .closebtn').on('click', function () {
    closeNav();
  });
});

$('openNav').on('click', function(){
  $('.nav-left').animate({ width:'toggle' }, 1000);
});


function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
  document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  document.body.style.backgroundColor = 'white';
}
 // Section 3: Countdown Timer
 $(document).ready(function () {
   function updateCountdown() {
     const eventDate = new Date('2023-10-25T00:00:00').getTime();
     const now = new Date().getTime();
     const distance = eventDate - now;

     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     $('#countdown').text(`${days}d ${hours}h ${minutes}m ${seconds}s`);

     if (distance < 0) {
       clearInterval(countdownInterval);
       $('#countdown').text('Event Started');
     }
   }
   const countdownInterval = setInterval(updateCountdown, 1000);

   // Section 4: Character Counter
   $('#message').on('input', function () {
     const remaining = 100 - $(this).val().length;
     $('#charCount').text(remaining);
   });
 });

//  $('Home a').on('click' ,function(e)){
//   $(e.target).addclass('')
//   $(e.target).silblings().removeclass('active')
//  }
//  ;
// $(document).ready(function () {


// countdown
var countDownDate = new Date("July 26, 2024 15:37:25").getTime();
var x = setInterval(function() {
 
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $('#days').text(days);
  $('#hours').text(hours);
  $('#minutes').text(minutes);
  $('#seconds').text(seconds);
  if (distance < 0) {
    clearInterval(x);
    $('#timer').html('EXPIRED');
  }
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);

function validationEmail() {
  const regexStyle =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (regexStyle.test(inputs[0].value)) {
    // el tmam
    inputs[0].classList.add('is-valid');
    inputs[0].classList.remove('is-invalid');
    return true;
  } else {
    //el mesh tmam

    inputs[0].classList.add('is-invalid');
    inputs[0].classList.remove('is-valid');

    return false;
  }
}

function validationPassword() {
  const regexStyle = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (regexStyle.test(inputs[1].value)) {
    // el tmam
    inputs[1].classList.add('is-valid');
    inputs[1].classList.remove('is-invalid');
    return true;
  } else {
    //el mesh tmam

    inputs[1].classList.add('is-invalid');
    inputs[1].classList.remove('is-valid');

    return false;
  }
}
