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
	$('#boo4').hide();
	
	var playBtn = $('#playBtn');
	var pauseBtn = $("#pauseBtn");
	var resumeBtn = $('#resumeBtn');
	var reverseBtn = $('#reverseBtn');
	var paused = false;

		// basic onload animations

		// title_tween = TweenMax.staggerTo([s1, s2, s3], 1, {
		// 	scale:0.2, opacity:0.3}, 0.5
		// );
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

		TweenMax.to(boo4, 1, {
			left:"300px",
			repeat:-1,
			repeatDelay:0.5,
			yoyo:true
		});

		// click animations

		$('#boo1').click(function(){
			$('#boo4').fadeIn("slow");
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
					tween1.pause();
					paused = true;	
				} else {
					tween1.resume();
					paused = false;	
				}
			}
		});

		$(document).keypress(function(event){
			if (event.which == 114) {
				tween1.restart();
			}
		});
		
	});