//$.noConflict();
//jQuery(document).ready(function($) {

(function ($) {
    function cutPagination() {
        var pag = $(".pagination .contents");
        var span = pag.find("span");
        span.each(function () {
            $(this).prev().not("a.prev").addClass("vis");
            $(this).next().not("a.next").addClass("vis");
        });
    }

 
// *********************************
// *********************************
// *********************************
    $(document).ready(function () {
        

	$("select").selectpicker();
        helpers();
        nhancedBootstrapCollapse({
            trigger: "#nav-trigger", // trigger element
            target: "#main-nav", // target element
            anywhereClose: true, // if clicked anywhere -true: close, false:nothing
            anywhereCloseBlockingElement: "target", // when clicked this area, target won't be closed // USE "target" to select target element ;)
            anywhereCloseBlockingMaxRes: false, // max resolution to click anywhere and close
            area_class: "main-nav-open", // class added to body when element is active
            maxRes: 1039 // class when element is hidden
        });
        modalWindows({
            target: ".modal",
            trigger: "[data-toggle-modal]",
            defaultOpen: true,
            bodyClass: "modal-open",
            nh_modalShow: function () {
                console.log($(this));
            }
        });
//        blockHeight({
//            target: "[data-height='window']",
//            adjustTo: "window"
//        });



        blockHeight({
            target: ".red-block",
            adjustTo: ".green-block",
            max_height: 100,
            preserve_min_height: true, // true - jezeli wyzszy - nie nadawaj wysokosci, false - zawsze nadaje wysokosc, 1000 - minimalna wysokosc
            adjustHeight: 0,
            rwd: true,
            loadMoment: "load", // load lub ready
            setTimeout: 500
        });

        if ($(".recom-block").length) {
            $('.recom-block .table-cell').responsiveEqualHeightGrid(); // ustawienie tych samych wysokosci w rzedzie! // grids.min.js
        }


	if (!$("form").hasClass("invalid")) {
		$("input[name=event]").attr('value', $( "select[name=event-type1] option:selected").val()); 
	};

	if (!$("form").hasClass("invalid")) {
		$("input[name=event]").attr('value', $( "select[name=event-type5] option:selected").val()); 
	};


	$( "select[name=event-date-ibm]" ).change(function() {
	   if ( $("select[name=event-date-ibm] option:selected").val() == "24.06-28.06.2019" ) {		
	     $("#event1").show();
	     $("#event2").hide();
	     $("#event3").hide();
	     $("#event4").hide();
	     $("input[name=event]").attr('value', $( "select[name=event-type1] option:selected").val()); 
	     
           } else if ( $("select[name=event-date-ibm] option:selected").val() == "01.07-05.07.2019" ) {		
	     $("#event1").hide();
	     $("#event2").show();
	     $("#event3").hide();
	     $("#event4").hide();
	     $("input[name=event]").attr('value', $( "select[name=event-type2] option:selected").val()); 

           } else if ( $("select[name=event-date-ibm] option:selected").val() == "19.08-23.08.2019" ) {		
	     $("#event1").hide();
	     $("#event2").hide();
	     $("#event3").show();
	     $("#event4").hide();
	     $("input[name=event]").attr('value', $( "select[name=event-type3] option:selected").val()); 

           } else if ( $("select[name=event-date-ibm] option:selected").val() == "26.08-30.08.2019" ) {		
	     $("#event1").hide();
	     $("#event2").hide();
	     $("#event3").hide();
	     $("#event4").show();
	     $("input[name=event]").attr('value', $( "select[name=event-type4] option:selected").val()); 

           };
	});

	$( "select[name=event-date-ibm2]" ).change(function() {
	   if ( $("select[name=event-date-ibm2] option:selected").val() == "03.07-13.07.2019, Rogowo" ) {		   
	     $("#event5").show();
	     $("#event6").hide();
	     $("#event7").hide();
	     $("#event8").hide();
	     $("input[name=event]").attr('value', $( "select[name=event-type5] option:selected").val()); 
	     
           } else if ( $("select[name=event-date-ibm2] option:selected").val() == "12.07-22.07.2019, Międzybrodzie Bialskie" ) {
	     $("#event5").hide();
	     $("#event6").show();
	     $("#event7").hide();
	     $("#event8").hide();
	     $("input[name=event]").attr('value', $( "select[name=event-type5] option:selected").val()); 

           } else if ( $("select[name=event-date-ibm2] option:selected").val() == "04.08-14.08.2019, Łeba" ) {			   
	     $("#event5").hide();
	     $("#event6").hide();
	     $("#event7").show();
	     $("#event8").hide();
           };
	});

	$( "select[name=event-date-ibm3]" ).change(function() {
	   if ( $("select[name=event-date-ibm3] option:selected").val() == "24-26.04.2019" ) {		   
	     $("#event9").show();
	     $("#event10").hide();
		 console.log($( 'checkbox[name="event-type9[]"]').val());
	     $("input[name=event]").attr('value', $( 'checkbox[name="event-type9[]"]').val()); 
	   } 
        
	});

	$( "select[name=event-type1]" ).change(function() {
		$("input[name=event]").attr('value', $( "select[name=event-type1] option:selected").val()); 
	});

	$( "select[name=event-type2]" ).change(function() {
		$("input[name=event]").attr('value',$( "select[name=event-type2] option:selected").val());
	});

	$( "select[name=event-type3]" ).change(function() {
		$("input[name=event]").attr('value',$( "select[name=event-type3] option:selected").val());
	});

	$( "select[name=event-type4]" ).change(function() {
		$("input[name=event]").attr('value',$( "select[name=event-type4] option:selected").val());
	});

	$( "select[name=event-type5]" ).change(function() {
		$("input[name=event]").attr('value', $( "select[name=event-type5] option:selected").val()); 
	});

	$( "select[name=event-type6]" ).change(function() {
		$("input[name=event]").attr('value',$( "select[name=event-type6] option:selected").val());
	});

	$( "select[name=event-type7]" ).change(function() {
		$("input[name=event]").attr('value',$( "select[name=event-type7] option:selected").val());
	});

	$( "select[name=event-type8]" ).change(function() {
		$("input[name=event]").attr('value',$( "select[name=event-type8] option:selected").val());
	});
	$( "select[name=event-type9]" ).change(function() {
		$("input[name=event]").attr('value',$( "select[name=event-type9] option:selected").val());
	});
	$( "select[name=event-type10]" ).change(function() {
		$("input[name=event]").attr('value',$( "select[name=event-type10] option:selected").val());
	});


        if ($(".h-slider").length) {
            $(".h-slider").owlCarousel({
                items: 1,
                responsive: {
                    0: {
                        items: 1
                    },
                    // breakpoint from 1024 up
                    1024: {
                        items: 1
                    }
                },
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 8000,
                loop: true,
                baseClass: "owl-carousel",
                itemClass: "owl-item",
                navContainerClass: "owl-nav",
                controlsClass: "owl-controls",
                dotClass: "owl-dot",
                dotsClass: "owl-dots",
                autoHeightClass: "owl-height"
            });
        }
        if ($(".h-slider2").length) {
            $(".h-slider2").owlCarousel({
                items: 1,
                responsive: {
                    0: {
                        items: 1
                    },
                    // breakpoint from 1024 up
                    1024: {
                        items: 1
                    }
                },
                nav: true,
                dots: false,
                autoplay: false,
                autoplayTimeout: 3000,
                loop: true,
                baseClass: "owl-carousel",
                itemClass: "owl-item",
                navContainerClass: "owl-nav",
                controlsClass: "owl-controls",
                dotClass: "owl-dot",
                dotsClass: "owl-dots",
                autoHeightClass: "owl-height",
                navText: ['<span class="icon i-prev"></span>','<span class="icon i-next"></span>']
            });
        }
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 3200, // Speed back to top (ms)
            scrollSpeed: 800, // Speed back to top (ms)
            easingType: 'easeInOutQuart', // Scroll to top easing (see http://easings.net/)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '', // Text for element
            activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
// using on
        //        $(window).on('mousewheel', function (event) {
        //            console.log(event.deltaX, event.deltaY, event.deltaFactor);
        //        });

    });
}(jQuery));
