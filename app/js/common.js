$(function() {
	var owl_1 = $('.owl-carousel._1');
	var owl_2 = $('.owl-carousel._2');
	 owl_1.owlCarousel({
	 	loop:false,
    margin:64,
    nav: true,
    mouseDrag: false,
    items:3,
    onInitialized: counter_1, //When the plugin has initialized.
  	onTranslated: counter_1, //When the translation of the stage has finished.
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1,
            slideBy: 1
        },
        768:{
            items:2,
            slideBy: 2
        },
        1024:{
            items:3,
            slideBy: 3
        }
    }
	 });

	 function counter_1(){
		var pages = $('.owl-carousel._1 .owl-dot').length
		var page = 	$('.owl-carousel._1 .owl-dot.active').index() + 1
		$('.slider-counter._1').html(page+" / "+pages)
	}


	owl_2.owlCarousel({
	 	loop:false,
    margin:64,
    nav: true,
    mouseDrag: false,
    mergeFit: false,
    items:3,
    onInitialized: counter_2, 
  	onTranslated: counter_2, 
    onResize: counter_2,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1,
            slideBy: 1
        },
        768:{
            items:2,
            slideBy: 2
        },
        1024:{
            items:3,
            slideBy: 3
        }
    }
	 });
	

	function counter_2(){
		var pages = $('.owl-carousel._2 .owl-dot').length
		var page = 	$('.owl-carousel._2 .owl-dot.active').index() + 1
		$('.slider-counter._2').html(page+" / "+pages)
	}

	$('#women').on('click', function(){
		var th = $(this);
		var list = $('.product-list._women');
		list.toggleClass('hidden')	

		
	});

	$('#men').on('click', function(){
		var th = $(this);
		var list = $('.product-list._men');

		 list.toggleClass('hidden')		
	});
	

	
});
