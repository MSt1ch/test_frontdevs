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

	$('#women').on('click', function women_list(){
		var th = $(this);
		var list = $('.product-list._women');
		list.toggleClass('hidden')	

		
	});

	$('#men').on('click', function men_list(){
		var th = $(this);
		var list = $('.product-list._men');

		 list.toggleClass('hidden')		
	});

	$('.product__sort-button > span, .product__sort-button > i').on('click', function(){
		$('.dropdown').toggleClass('hidden')
	})

	$('.dropdown__item').on('click', function(){
		
		$('.product__sort-button > span').text($(this).text())
		$('.dropdown').toggleClass('hidden')
	})
	

	$('.dropdown__item._price').on('click', function(){
		var list = $('.product-card-list._1')
		var list2 = $('.product-card-list._2')

		var sortlist = list.find('.product-card').sort(function (a, b) {
		    return a.dataset.price - b.dataset.price;
		})
		for(var i=0; i<sortlist.length; i++){
		($('.product-card-list._1 .owl-item')[i] ).appendChild(sortlist[i]);
		}

		
		var sortlist2 = list2.find('.product-card').sort(function (a, b) {
		    return a.dataset.price - b.dataset.price;
		})
		for(var i=0; i<sortlist2.length; i++){
		($('.product-card-list._2 .owl-item')[i] ).appendChild(sortlist2[i]);
		}
	})


	$('.dropdown__item._name').on('click', function(){
		var list = $('.product-card-list._1')
		var list2 = $('.product-card-list._2')
		

		var sortlist = list.find('.product-card').sort(function (a, b) {
	    if (a.dataset.name > b.dataset.name) {
		    return 1;
		  }
		  if (a.dataset.name < b.dataset.name) {
		    return -1;
		  }
		  return 0;
		})
		for(var i=0; i<sortlist.length; i++){
		($('.product-card-list._1 .owl-item')[i] ).appendChild(sortlist[i]);
		}

		
		var sortlist2 = list2.find('.product-card').sort(function (a, b) {
	   	if (a.dataset.name > b.dataset.name) {
		    return 1;
		  }
		  if (a.dataset.name < b.dataset.name) {
		    return -1;
		  }
		  return 0;
		})
		for(var i=0; i<sortlist2.length; i++){
		($('.product-card-list._2 .owl-item')[i] ).appendChild(sortlist2[i]);
		}
	
	})


	$('.checkbox._all').on('click', function(event) {   
    if(this) {
        // Iterate each checkbox
        $(':checkbox').each(function() {
            this.checked = true;                        
        });
        $('.product-list._women').removeClass('hidden')	
    	$('.product-list._men').removeClass('hidden')
    } 

	});
  

});
