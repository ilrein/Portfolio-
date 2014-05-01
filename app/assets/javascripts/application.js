// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){

	//instanstiated variables/objects
	
	var boo1 = $("#boo1");
	var boo2 = $("#boo2");
	$('#boo3').hide();
	var boo4 = $('.boo4');
	var floor = $('#wooden_floor');
	var hills = $('#smiley_hills');
	var boxes = $('#question_boxes');
	var boxes2 = $('#question_boxes2');
	var blocks = $('#blocks');
	var clouds = $('#clouds');
	var paused = false;
	var hide = new TimelineLite();
	var bb = new TimelineLite();
	var bb2 = new TimelineLite();
	var b4s = b4s;

		//mouse follow

		$(document).on('mousemove', moveBoo);
		$(document).on('mousemove', mouseSpot);

		function moveBoo(e){
			TweenLite.to(boo4, 4, {css:{left: e.pageX, top: e.pageY}});
			b4s = boo4.position();
			if (b4s.left < e.pageX) {
				$('.boo4').addClass('flipped');
			} else {
				$('.boo4').removeClass('flipped');
			} 
		}

		function mouseSpot(e) {

		}

		// on hover boo

		$('.boo4').on("mouseenter", function(e){
			if (b4s.left < e.pageX) {
				$('.boo4').addClass('boo4_closed');
			}
		});

		$('.boo4').on("mouseleave", function(){
			$('.boo4').removeClass('boo4_closed');
		});

		// hide all the images

		hide.to(floor, 0.1, {
			opacity:0,
			onComplete:initFloor
		});

		hide.to(hills, 0.1, {
			opacity:0
		});

		hide.to(boxes, 0.1, {
			opacity:0
		});

		hide.to(boxes2, 0.1, {
			opacity:0
		});

		hide.to(blocks, 0.1, {
			left:"1000px"
		});

		hide.to(clouds, 0.001, {
			scale:0.01
		});

		hide.to(cloud, 0.001, {
			scale:0.01
		});

		//chain the animations!

		function initFloor() {
			TweenLite.to(floor, 2.3, {
				opacity:1,
				onComplete:initHills
			});
		}

		function initHills() {
			TweenLite.to(hills, 1.2, {
				opacity:1,
				left:"50px",
				ease: Elastic.easeIn,
				onComplete:initBoxes
			});
		}

		function initBoxes() {
			TweenLite.from(boxes, 2, {
				opacity:0.75,
				left:"50px",
				ease: Bounce.easeIn,
				onComplete:keepBoxes1
			});

			TweenLite.from(boxes2, 2.4, {
				opacity:1,
				rotation:360,
				onComplete:keepBoxes2
			});
		}

		function keepBoxes1() {
			TweenLite.to(boxes, 2.1, {
				opacity:1,
				onComplete:initBlocks
			});
		}
		function keepBoxes2() {
			TweenLite.to(boxes2, 1, {
				opacity:1,
				onComplete:initClouds
			});
		}

		function initClouds() {
			TweenLite.to(clouds, 1, {
				scale:1,
				ease: Bounce,
				onComplete:initCloud
			});
		}

		function initCloud() {
			TweenLite.to(cloud, 1, {
				scale:1,
				ease: Bounce
			});
		}

		function initBlocks() {
			TweenLite.to(blocks, 1, {
				left:"-=1000px",
				ease: Bounce,
				onComplete:keepBlocks
			});
		}
		function keepBlocks() {
			TweenLite.to(blocks, 1.4, {
				opacity:1
			});
		}

		// onload animations

		TweenMax.to(s1, 3, {
			scale:1.2,
			opacity:2,
			repeat:-1,
			ease: SlowMo.ease.config(0.3, 0.6, true)
		});

		tween1 = TweenLite.to(boo1, 100, {
			left:"3000px"
		});

		tween2 = TweenMax.to(boo2, 9, {
			left:"-200px",
			opacity:0,
			repeat:-1,
			ease:SlowMo.ease.config(0.3, 0.6, true)
		});

		TweenLite.to(boo3, 110, {
			left:"5000px"
		});

		// click animations

		$('#smiley_hills').on('click', function(){
			bb.to(hills, 2.5, {
				scale:1.4
			});
			bb.reverse();
		});

		$('#blocks').on('click', function(){
			bb2.to(blocks, 2.5, {
				scale:1.4
			});
			bb2.reverse();
		});

		$('#boo4').click(function(){
			TweenLite.to(boo4, 4, {
				opacity:0.25
			});
		});

		$('#clouds').on('click', function(){
			var selected = $(this);
			rotate(selected);
			rt.time(0);
		});

		// utility functions

		var rt = new TimelineLite();

		function rotate(selected){
			rt.to(selected, 2, {
				rotation:360
			});
		}

		// end of utility

		//click functions:

		$('#cloud').on('click', function(){
			$('#cloud').animate({
				left:"+=50"
			});
		});

		$('#boo1').click(function(){
			$('#boo3').fadeIn("slow");
			TweenLite.to(boo1, 1.6,{
				top:'+=40px', 
				ease:Strong.easeOut
			});
			$('#boo1').fadeOut("slow");
		});

		$('#boo3').click(function(){
			$('#boo1').fadeIn("slow");
			TweenLite.to(boo3, 1.6,{
				top:'-=40px', 
				ease:Strong.easeOut
			});
			$('#boo3').fadeOut("slow");
		});

		$('#boo2').click(function(){
			TweenLite.to(boo2, 1.6,{
				top:'+=40px', 
				ease:Strong.easeOut

			});
			TweenLite.to(boo2, 15, {
				left:"-200px",
				opacity:0,
				ease:SlowMo.ease.config(0.3, 0.6, true)
			});
		});

		// key press events

		$(document).keypress(function(event){
			if (event.which == 112) {
				if (paused == false) {
					hide.pause();
					paused = true;	
				} else {
					hide.resume();
					paused = false;	
				}
			}
		});

		$(document).keypress(function(event){
			if (event.which == 114) {
				hide.restart();
			}
		});
		
	});