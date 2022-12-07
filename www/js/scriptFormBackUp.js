

$( ".input-container1 input" ).focus(function() {

    $('.input-container1 label').css('font-size','18px')

});


$( ".input-container1 input" ).focusout(function() {


                if($(this).val().length > 0) {

                    $('.input-container1 label').css('color',' #ba973f').css('font-size','18px')

                } else {

                    $('.input-container1 label').css('color','#F1F1F1').css('font-size','22px')
                }

});


                $(".input-container1 input").keypress(function() {

                if($(this).val().length > 0) {

                    $('.input-container1 label').css('color',' #ba973f').css('font-size','18px')

                } else {

                }
            });




/*
$( ".input-container2 input" ).focus(function() {

    $('.input-container2 label').css('font-size','18px')

});



$( ".input-container2 input" ).focusout(function() {


                if($(this).val().length > 0) {

                    $('.input-container2 label').css('color',' #ba973f').css('font-size','18px')

                } else {

                    $('.input-container2 label').css('color','#F1F1F1').css('font-size','22px')
                }

});


                $(".input-container2 input").keypress(function() {

                if($(this).val().length > 0) {

                    $('.input-container2 label').css('color',' #ba973f').css('font-size','18px')

                } else {

                }
            });

*/





$('input').attr('autocomplete','off');


/*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);


    });

    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
        $('.input-container3 label').css('font-size','22px')

    });





      $('.dropdown').focus(function () {
                           
        $('.input-container3 label').css('font-size','18px')

    });


    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('class'));
        $('.input-container3 label').css('color','#ba973f').toggleClass('size');


     });



















/*End Dropdown Menu*/


$( ".input-container4 textarea" ).focus(function() {

    $('.input-container4 label').css('font-size','18px')
    $('.input-container4 textarea').css('border','1px solid rgba(241,241,241,1)')

});


$( ".input-container4 textarea" ).focusout(function() {


                if($(this).val().length > 9) {

                    $('.input-container4 label').css('color',' #ba973f').css('font-size','18px')
                    $('.input-container4 textarea').css('border','1px solid #ba973f')

                } else {

                    
                    $('.input-container4 label').css('color','#F1F1F1').css('font-size','22px')
                    $('.input-container4 textarea').css('border','1px solid rgba(241,241,241,0.6)')


                }

});


                $(".input-container4 textarea").keypress(function() {

                if($(this).val().length > 9) {

                    $('.input-container4 label').css('color',' #ba973f').css('font-size','18px')
                    $('.input-container4 textarea').css('border','1px solid #ba973f')


                } else {

                }
            });

/*

$('.btn').on('click', function() { 
            
            $('this')formObject.reset()

        });
*/



