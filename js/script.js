// JavaScript Document
// KING KOIL Scripting
//animation for banner caption
// $(document).ready(function(){
	// if($('.InnerProductPage2,.InnerProductPage').length>0){
// $('.hoverList > li > a').click(function(){
// var url = this.hash;
// goToByScroll(url)
// });

// var url = window.location.hash;
// goToByScroll1(url);

// function goToByScroll(url){
    // $('html,body').animate({scrollTop: $(url).offset().top-70},'slow');
// }
// function goToByScroll1(url){
    // $('html,body').scrollTop(0).animate({scrollTop: $(url).offset().top-70},1000);
// }
// }
// });
(function($) {
    $.fn.contentAcc = function() {
        var close;
        // var clicked = this;
        return this.find('.slide').click(onClick)
            // console.log('click is fine')
        function onClick() {

            if ($(this).hasClass('active')) {
            	$(close).slideUp().prev().removeClass('active');
                console.log('click is fine')
                return false;
            } else {
                $(close).slideUp().prev().removeClass('active');
                // console.log('you clicked an li');           
                close = $(this).addClass('active').next().slideDown(); // This is the <ul>
            }
        };


    };
}(jQuery));
$(function(){
	$('#hospitalityListId li').click(function(){
		  $("#hospitalityListId li.active").removeClass("active");
			$(this).addClass('active');		
	$('.hsptlyHide').hide();
	var hsptlyId = $(this).attr('rel');
	$('#'+hsptlyId).show();
	})
$("#hospitalityTabId").owlCarousel({
        autoPlay: false, //Set AutoPlay to 3 seconds
        dots: false,
		navigation: true,
        items: 11,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });	
});
/*$(function(){ // document ready
   if (!!$('#sticky').length) { // make sure "#sticky" element exists
      var el = $('#sticky');
      var stickyTop = $('#sticky').offset().top-70; // returns number
      var footerTop = $('.ClientLogoWrapper').offset().top; // returns number
      var stickyHeight = $('#sticky').height();
      var limit = footerTop - stickyHeight-30;
      $(window).scroll(function(){ // scroll event
          var windowTop = $(window).scrollTop(); // returns number
            
          if (stickyTop < windowTop){
             el.css({ position: 'fixed', top: 70 });
              $('#sticky').addClass('stick');
          }
          else {
          	$('#sticky').removeClass('stick');
             el.css('position','static');
          }
            
          if (limit < windowTop) {
           
        
           var diff = limit - windowTop;
          el.css({top: diff})	;
          }     
        });
   }
});*/


$(document).ready(function(){
		if ($('.faq-wr').length > 0) {
$('.faq-wr').addClass('active');
}

/*--------- home auto height --------*/
$(document).ready(function(){
    var imageHeight = $('.larimage img').innerHeight();
	$('.faq-div').innerHeight(imageHeight)

});

$( window ).resize(function() {
    var imageHeight = $('.larimage img').innerHeight();
	$('.faq-div').innerHeight(imageHeight)
});
/*--------- home auto height --------*/


if ($('.hospitality-wr').length > 0) {
  var index;
  $('.tabing-link ul li').eq(0).addClass('active');
  $('.photo-galary-wr .photo-album-item').eq(0).show();
  $('.tabing-link ul li').click(function () {
    $('.tabing-link ul li').removeClass('active');
    $('.photo-galary-wr .photo-album-item').removeClass('active').hide()
    index = $(this).addClass('active').index();
    $('.photo-galary-wr .photo-album-item').eq(index).addClass('active').fadeIn();
  })
}

if ($('.video-wr').length > 0) {
	$('.videos-inner .video-item').click(function(){
		$(this).find('.play-button').trigger( "click" );
	})
}
	
	
  $('.carouselprdctUsps').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: false
});
 $(".carouselPrdctRngM").slick({
dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: false
});
    
    });
	
$(document).ready(function(){
if ($(window).width() < 768) {
   $(".footerLinkWrap > .footerLink > h4").click(function() {
   	  	
        if (false == $(this).next().is(':visible')) {
            $('.footerLinkWrap > .footerLink > .footerList').slideUp(300);
            $(".footerLinkWrap > .footerLink > h4").removeClass('shwohideArrow')
           
        }
        $(this).next().slideToggle(300);
        $(this).toggleClass('shwohideArrow');
    });
    $('.footerLinkWrap > .footerLink > .footerList:eq(0)').show();
}


$( ".NavList li.scndMenu" ).hover(
  function() {
    $( this ).addClass( "hoverarrow" );
  }, function() {
    $( this ).removeClass( "hoverarrow" );
  }
);
});


$(document).ready(function(){
		$('.MattressLayerWrap>div').click(function(){
			//$(this).siblings().addClass('opecimg');
			//$(this).toggleClass('layermargin').removeClass('opecimg');
			//$(this).siblings().removeClass('layermargin');
			});
			
			$('.layer1>img').clone().appendTo('.imgComSysDiv');
			var appendElementpara=$('.layer1 .layerDescrpt>p').text();
			var appendElementdesc = $(this).find('.comparaDes p').text();
			$('.ComSysRight>h5').html(appendElementpara);
		    $('.MattressLayerWrap>div').click(function(){
			var appendElement = $(this).find('img').clone();
			var appendElement2 = $(this).find('.layerDescrpt>p').text();
			$('.imgComSysDiv').find('img').remove();
			$(appendElement).appendTo('.imgComSysDiv');
			$('.ComSysRight>h5').html(appendElement2);
			var appendElement3 = $(this).find('.comparaDes>p').text();
			$('.ComSysRight>p').html(appendElement3);
			//$(this).addClass()
			});
			
		/*$('.DetailSection2').on('click', function () {
			$('.MattressLayerWrap>div').removeClass('layermargin');		
			$('.MattressLayerWrap>div').removeClass('opecimg');		
			
			}).children().on('click', function (event) {
event.stopPropagation();
				
		});*/
		if ($('.DetailSection2').length > 0) {
$('.DetailSection2').hover(function(){
	$('.DetailSection2').addClass('hi');
})
		}
			
	
 });
 

<!--custom scroll -->
	(function($){
		$(window).on("load",function(){
			
			$(".DealerContent").mCustomScrollbar({
				theme:"minimal"
			});
			
			 	$(".hoverOption").mCustomScrollbar({
				theme:"default",
				   mouseWheelPixels: 150,
				    scrollInertia: 60,
			}); 
			
		});
	})(jQuery);		 
<!--custom scroll -->

(function($){
	$(window).on("load",function(){
		$(".adjustBottom .tabelSection").mCustomScrollbar({
			axis:"x" // horizontal scrollbar
		});
	});
})(jQuery);


(function($){
	$(window).on("load",function(){
		$(".faq-div").mCustomScrollbar({
		});
	});
})(jQuery);


//$(document).ready(function(){
//		$('.MattressLayerWrap>div').click(function(){
//			$(this).toggleClass('layermargin');
//			$(this).siblings().removeClass('layermargin');
//			});
//			
//			
//			$('.layer1>img').clone().appendTo('.imgComSysDiv');
//		    $('.MattressLayerWrap>div').click(function(){
//			var appendElement = $(this).find('img').clone();
//			var appendElement2 = $(this).find('.layerDescrpt>p').text();
//			$('.imgComSysDiv').find('img').remove();
//			$(appendElement).appendTo('.imgComSysDiv');
//			$('.ComSysRight>h5').html(appendElement2);
//			});
//		
//	 });


//=============================dealer box
$(document).ready(function(){
		$('.LocLink').click(function(){
			$('.DealerBoxWrap').addClass('showDealer');
			$('body, html').addClass('stop');
		//	$('.wrapper').addClass('hiddencontent');
			});
		$('.dealClose').click(function(){
			$('.DealerBoxWrap').removeClass('showDealer');
			$('body, html').removeClass('stop');
		//	$('.wrapper').removeClass('hiddencontent');
			});
			
		$('.select').click(function(){
			$(this).parents('li').siblings().find('.hoverOption').slideUp();
			$(this).find('.hoverOption').slideToggle();
			});
			$('.shopDetailLink').click(function(){
			$('.DealerContent').fadeOut();
			$('.ShowroomWrap').fadeIn();
			$(this).find('.hoverOption').slideToggle();
			});	
			

	 });
	 

//===================code for banner animation===================

//$(document).ready(function(){
//	var link1= $('.BannerWrapper .slick-dots li:nth-child(1)');
//	var link2= $('.BannerWrapper .slick-dots li:nth-child(2)');
//		if ($('#takeonebar').hasClass('active')){
//        $(link2).removeClass('slamdown');  
//        } else {
//        $('#takeonebar').addClass('slamdown');
//        }			
//	 });


//======================code for video====================
$(document).ready(function(){
		$('.gb2').click(function(){
			$('.overlay4').fadeIn(600);
		});
			
		$('.gb3').click(function(){
			$('.overlay5').fadeIn(600);
		});
			
		//$('.overlay').click(function(){
//			$(this).fadeOut();
//			});
			
			
		$('.videoOpen').click(function(){
			$(this).next().fadeToggle(600);
		});	
		
		$('.icontag').click(function(){
			$(this).next().fadeToggle(600);
		});	
		
		$('.cityWrap .dealClose').click(function(){
			$('.overlay').fadeOut();
		});	
		
		$('.iframelogo .dealClose').click(function(){
			$('.overlay, .overlay4').fadeOut();
			$('.aboutVideo1 iframe').attr('src', $('.aboutVideo1 iframe').attr('src'));
		});
		
		$('.iframelogo2 .dealClose').click(function(){
			$('.overlay, .overlay5').fadeOut();
			$('.aboutVideo2 iframe').attr('src', $('.aboutVideo2 iframe').attr('src'));
		});
		
	 });


//=============================code for menu animation===========================================
	
 $(document).ready(function(){
	$('.NavList>li').hover(function(){
		$(this).siblings('li').toggleClass('minopac');
		}); 
		
//======code for mobile menu======
     $('.ToggleMenu').click(function(){
	  $('.navigationWrap').toggleClass('showMob');
	 $('body, html').toggleClass('stop');
	 
	  });
	  
	  
});


	 
//=============================code for about us animation=======================================

$(document).ready(function(){
	$('#Aboutbtn1').hover(function(){
		$('.topAboutus .A-rightDiv img').toggleClass('effectpic' ); 
		}); 
	$('#Aboutbtn2').hover(function(){
		$('.bottomAboutus .A-rightDiv img').toggleClass('effectpic' ); 
		}); 
});

//=============================code for header animation========================================= 
 $(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  if(scroll>100){
		  $('.HeaderWrapper').addClass('Animeheader');
		  }
	 else{
		 $('.HeaderWrapper').removeClass('Animeheader');
		 }
	 }); 
//============================= code for banner caption text ======================================
	function hgrh(){
		 var bannerheight=$('.bannerholder img').innerHeight();
		$('.bannerholder .container').css('height',bannerheight);
		}
		
		/*function heightcontrol(){
		 var fullheight=$(window).innerHeight()-70;
		$('.BannerWrapper').css('height',fullheight);
		$('.bannerholder .container').css('height',fullheight);
		 }
	$(document).ready(function(){
		//hgrh();
		heightcontrol();
	 });
	 $(window).resize(function(){
	//	hgrh();
		heightcontrol();
	 });*/
	 //======================================= slider js ========================================
	
    $(document).ready(function(){
      $('.bannerholder').slick({
       dots: true,
  infinite: true,
  autoplay:true,
 pauseOnHover:false,
 autoplaySpeed:7000,
  speed: 500,
  fade: true,
  cssEase: 'linear'
      });
	  
    });
  //======================================= premium line page ====================================
  $(document).ready(function() {
		   
	$(".P_Content").hide();
	$(".pTabList li:first").addClass("activetab").show();
	$(".P_Content:first").show();

	//On Click Event
	$(".pTabList li").click(function() {
		$(".pTabList li").removeClass("activetab"); 
		$(".P_Content").hide();
		$(this).addClass('activetab'); 
		var activepersonTab = $(this).find("a").attr("href"); 
		$(activepersonTab).fadeIn(); 
		return false;
	});
	//inner tab
	$(".stage2Div").hide();
	$(".DrList li:first").addClass("activetab").show();
	$(".stage2Div:first").show();

	//On Click Event
	$(".DrList li").click(function() {
		$(".DrList li").removeClass("activetab"); 
		$(".stage2Div").hide();
		$(this).addClass('activetab'); 
		var activepersonTab2 = $(this).find("a").attr("href"); 
		$(activepersonTab2).fadeIn(); 
		return false;
	});
	//inner tab
	//inner tab2
	$(".stage2Div2").hide();
	$(".DrList2 li:first").addClass("activetab").show();
	$(".stage2Div2:first").show();

	//On Click Event
	$(".DrList2 li").click(function() {
		$(".DrList2 li").removeClass("activetab"); 
		$(".stage2Div2").hide();
		$(this).addClass('activetab'); 
		var activepersonTab2 = $(this).find("a").attr("href"); 
		$(activepersonTab2).fadeIn(); 
		return false;
	});
	//inner tab2
	//inner tab3
	$(".stage2Div3").hide();
	$(".DrList3 li:first").addClass("activetab").show();
$(".stage2Div3:first").show();

	//On Click Event
	$(".DrList3 li").click(function() {
	$(".DrList3 li").removeClass("activetab"); 
		$(".stage2Div3").hide();
		$(this).addClass('activetab'); 
		var activepersonTab3 = $(this).find("a").attr("href"); 
		$(activepersonTab3).fadeIn(); 
		return false;
	});
	$(".stage2Div4").hide();
	$(".DrList4 li:first").addClass("activetab").show();
	$(".stage2Div4:first").show();

	//On Click Event
	$(".DrList4 li").click(function() {
	$(".DrList4 li").removeClass("activetab"); 
		$(".stage2Div4").hide();
		$(this).addClass('activetab'); 
		var activepersonTab3 = $(this).find("a").attr("href"); 
		$(activepersonTab3).fadeIn(); 
		return false;
	});
	$(".stage2Div5").hide();
	$(".DrList5 li:first").addClass("activetab").show();
	$(".stage2Div5:first").show();
	
	//inner tab3
	//====================code for detail page tabbing==================
	//inner tab4
	$(".d_tabBox").hide();
	$(".mattressTabList li:first").addClass("activetab").show();
$(".d_tabBox:first").show();

	//On Click Event
	$(".mattressTabList li").click(function() {
	$(".mattressTabList li").removeClass("activetab"); 
		$(".d_tabBox").hide();
		$(this).addClass('activetab'); 
		var activepersonTab4 = $(this).find("a").attr("href"); 
		$(activepersonTab4).fadeIn(); 
		return false;
	});
	
	//inner tab4
	
  });
  
  
  
  
  
  
  //=======================================client logo js ======================================== 
  $(document).ready(function(){ 
  $('.clientLogo').slick({
//  dots: true,
  infinite: true,
  speed: 500,
  autoplay:true,
  autoplaySpeed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//slider detail page

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  asNavFor: '.slider-for',
   arrows:true,
    navigation: true,
    centerMode: false,
  focusOnSelect: true,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
});
//slider 2nd
$('.ex-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.exNavslider'
});
$('.exNavslider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  asNavFor: '.ex-slider',
   arrows:true,
   vertical :true,
    navigation: true,
    centerMode: false,
  focusOnSelect: true
});
//slider end
//slider for testimonials
$('.testSlider').slick({
  dots: true,
  infinite: true,
  speed: 300,
 fade: true,
  cssEase: 'linear'
 // adaptiveHeight: true
});




 });
 
 
 //js wow
 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    }; 

 

  (function() {
	var link_element = document.createElement("link"),
		s = document.getElementsByTagName("script")[0];
	if (window.location.protocol !== "http:" && window.location.protocol !== "https:") {
		link_element.href = "http:";
	}
	link_element.href += "//fonts.googleapis.com/css?family=Open+Sans:300italic,300,400italic,400,600italic,600,700italic,700,800italic,800";
	link_element.rel = "stylesheet";
	link_element.type = "text/css";
	s.parentNode.insertBefore(link_element, s);
})();
			
			
