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
	var boo = $("#boo");
	var boo2 = $("#boo2");
	$('#boo3').hide();

		// basic onload animations
		
		TweenLite.to(boo, 100, {
			left:"3000px"
		});

		TweenLite.to(boo2, 9, {
			left:"-200px",
			opacity:0,
			ease:SlowMo.ease.config(0.3, 0.6, true)
		});

		TweenLite.to(boo3, 110, {
			left:"5000px"
		});


		// click animations

		$('#boo').click(function(){
			$('#boo3').fadeIn("slow");
			TweenLite.to(boo, 1.6,{
				top:'+=40px', 
				ease:Strong.easeOut
			});
		});

		$('#boo3').click(function(){
			$('#boo').fadeOut("slow");
			TweenLite.to(boo3, 1.6,{
				top:'-=40px', 
				ease:Strong.easeOut
			});
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

		
	});