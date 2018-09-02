$( document ).ready(function () {
	$('.video').before().click(function() {
		var vclass = $('.video').attr('class');
		var vid = document.getElementById("vid"); 

		if (vclass.indexOf("hide") !=-1) {
			// pause
			$('.video').removeClass('hide');
			vid.pause();
		}else{
			$('.video').addClass('hide');
			vid.play();
		}
	});

	$.simpleTicker($("#social"),{
	  speed : 1500,
	  delay : 5000,
	  easing : 'swing',
	  effectType : 'roll'
	});	
	$.simpleTicker($("#twitter"),{
	  speed : 1500,
	  delay : 5000,
	  easing : 'swing',
	  effectType : 'roll'
	});


	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:4,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true
	});
	new WOW().init();
	vid.addEventListener('ended', function(e) {
	$('.video').removeClass('hide');
	});
});

