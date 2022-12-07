



/* ------------------------------------------- Scroll event----------------------------------- */

$(function(){
  $('header').each(function() {
    var off = $(this).offset().top
    $(this).data('orig-offset', off);
  });
  $(window).scroll(function(){

    var scrollTop = $(window).scrollTop();

     $('header').each(function(){
      var off = $(this).data('orig-offset');
      
    
      var translate =  (scrollTop - off) / $(window).height() * 100;

      if (scrollTop >= off) {

/* ------------------------------------------- récupération du pourcentage de scroll ----------------------------------- */

        var translate =  (scrollTop - off) / $(window).height() * 100;
        var translate2 =  - translate;

        var translate3 = (  translate / 100)

/* ------------------------------------------- translate les H1 + photo ----------------------------------- */

        $('h2').css({transform: 'translateX(' + translate + '%)'});
        $('h1').css({transform: 'translateX(' + translate2 + '%)'});

       // $('.divImg').css({transform: 'translateX(' + translate2 + '%)'});


/* ------------------------------------------- Changement couleur logo ----------------------------------- */

        if ( translate >= 90 ) {
          $('.logoSVG').css('fill','#0D2F7C')
        } 
        else {
          $('.logoSVG').css('fill','#fafafa')
        }

      
        if ( translate >= 100 ) {
          $('.divImg').css('transform','scale(1)')
        } 

        else{
          $('.divImg').css({transform: 'scale(' + translate3 + ')'});

        }
      

    

      }
     });
  });
});
/* -------------------------------------------------------- Resize Window --------------------------------------- */

$( window ).resize(function() {

  var offset = $(".decouvrir button").offset();

  $('.invisible').css('left',offset.left);    
  $('.invisible').css('top',offset.top);
  $('.invisible').css('position','absolute');

});

/* --------------------------------------------- Calcul de la position de départ ----------------------------------- */

var p = $( ".decouvrir button" ).last();
var offset = p.offset();

/* --------------------------------------------- Lancement de l'animation ----------------------------------- */


$( ".invisible button, .invisible p" ).mouseenter(function() {
  $( ".blob-btn__blob" ).css('transform','translateZ(0) scale(1.7)' );
  $('.decouvrir button p').css('color','black');
});


$( ".invisible button, .invisible p" ).mouseout(function() {
  $( ".blob-btn__blob" ).css('transform','translate3d(0, 150%, 0)' );
  $('.decouvrir button p').css('color','#fafafa');


});



/* ------------------------------------------- Repositionnement de la div invisible ----------------------------------- */

  $('.invisible').css('left',offset.left);    
  $('.invisible').css('top',offset.top);
  $('.invisible').css('position','absolute');

  var offset = $(".decouvrir button").offset();

/* ------------------------------------------- Smooth scroll ----------------------------------- */

		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 1250; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	


