$(document).ready(function(){
    $('.latern__button').click(function(event){
        $('.latern__button, .latern__light ').toggleClass('active');
    })
    $('.laptop__key-power').click(function(event){
        $('.laptop__screen ').toggleClass('deactivated');
        $('.laptop__screen *').toggleClass('deactivated');
    })
   
   
   
   
    $('.bookmate').click(function(event){
        $('.popup, .popup__book').addClass('active');
        $('.latern, .flowers, .laptop, .paper, .cup, .bookmate ').toggleClass('blured');
    })
    $('.cup__note').click(function(event){
        $('.popup, .popup__pass').addClass('active');
        $('.popup__book').removeClass('active');
        $('.latern, .flowers, .laptop, .paper, .cup, .bookmate ').toggleClass('blured');
    })
    $('.popup').click(function(event){
        $('.popup, .popup__pass, .popup__book').removeClass('active');
        $('.latern, .flowers, .laptop, .paper, .cup, .bookmate  ').removeClass('blured');
    })





   
   
  
   
   
   
   
   
    $('.flowers__pot').click(function(event){
        $('.flowers__bee ').toggleClass('flying');
        $('.flowers__pot').toggleClass('unclick');
        setTimeout("$('.flowers__bee ').toggleClass('flying')", 2000);
        setTimeout("$('.flowers__pot').toggleClass('unclick')", 3000);
    })
    $('.laptop__blocker').change(function(event){
        if(document.getElementById('pass').value == 'happy123' ){
            $('.laptop__blocker ').toggleClass('off');
        }else if(document.getElementById('pass').value == ''){
            $('.laptop__blocker input').removeClass('invalid');
        }
        else{
            $('.laptop__blocker input').addClass('invalid');
            $('.laptop__blocker input').value = null;
        }
    })
    $('.paper__text').change(function(event){
        if($(".paper__text").value != ''){
            $('.paper, .paper__text, .paper__piece').addClass('active');
        }
    })
    $('.close1').click(function(event){
        $('.laptop__window-1').toggleClass('inactive');
    })
    $('.close2').click(function(event){
        $('.laptop__window-2').toggleClass('inactive');
    })
    $('.full1').click(function(event){
        $('.laptop__window-1').toggleClass('full');
    })
    $('.full2').click(function(event){
        $('.laptop__window-2').toggleClass('full');
    })
    $('.laptop__folder-1').click(function(event){
        $('.laptop__window-1').toggleClass('inactive');
    })
    $('.laptop__folder-2').click(function(event){
        $('.laptop__window-2').toggleClass('inactive');
    })


    //////////СЕКЦИЯ КАРТИНОК

    $('.closepic1').click(function(event){
        $('.laptop__picture-1').toggleClass('inactive');
    })
    $('.closepic2').click(function(event){
        $('.laptop__picture-2').toggleClass('inactive');
    })
    $('.closepic3').click(function(event){
        $('.laptop__picture-3').toggleClass('inactive');
    })
    $('.closepic4').click(function(event){
        $('.laptop__picture-4').toggleClass('inactive');
    })
    $('.closepic5').click(function(event){
        $('.laptop__picture-5').toggleClass('inactive');
    })

    $('.fullpic1').click(function(event){
        $('.laptop__picture-1').toggleClass('full');
    })
    $('.fullpic2').click(function(event){
        $('.laptop__picture-2').toggleClass('full');
    })
    $('.fullpic3').click(function(event){
        $('.laptop__picture-3').toggleClass('full');
    })
    $('.fullpic4').click(function(event){
        $('.laptop__picture-4').toggleClass('full');
    })
    $('.fullpic5').click(function(event){
        $('.laptop__picture-5').toggleClass('full');
    })

    $('.laptop__file-1').click(function(event){
        $('.laptop__picture-1').toggleClass('inactive');
    })
    $('.laptop__file-2').click(function(event){
        $('.laptop__picture-2').toggleClass('inactive');
    })
    $('.laptop__file-3').click(function(event){
        $('.laptop__picture-3').toggleClass('inactive');
    })
    $('.laptop__file-4').click(function(event){
        $('.laptop__picture-4').toggleClass('inactive');
    })
    $('.laptop__file-5').click(function(event){
        $('.laptop__picture-5').toggleClass('inactive');
    })

})