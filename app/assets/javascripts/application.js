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
//= require_tree .

$(document).ready(function(){
  t = new TimelineLite();
  t2 = new TimelineLite();
  t3 = new TimelineLite();
  t4 = new TimelineLite();
  t5 = new TimelineLite();
  t6 = new TimelineLite();
  t7 = new TimelineLite();
  t8 = new TimelineLite();

  $('#interlude').mouseenter(function(){
    t.to($(this), 0.7, {css:{color:'#0a00db'}});
    t.restart();
  });
  $('#interlude').mouseleave(function(){
    t.reverse();
  });
  $('#cg').mouseenter(function(){
    t2.to($(this), 0.7, {left:'50px'});
    t2.restart();
  });
  $('#cg').mouseleave(function(){
    t2.reverse();
  });
  $('#pwork').mouseenter(function(){
    t3.to($(this), 0.7, {left:'50px'});
    t3.restart();
  });
  $('#pwork').mouseleave(function(){
    t3.reverse();
  });
  $('#stadia').mouseenter(function(){
    t4.to($(this), 0.7, {scale:1.4});
    t4.restart();
  });
  $('#stadia').mouseleave(function(){
    t4.reverse();
  });
  $('#humber_role').mouseenter(function(){
    t5.to($(this), 0.7, {scale:1.4});
    t5.restart();
  });
  $('#humber_role').mouseleave(function(){
    t5.reverse();
  });
  $('#stadia_role').mouseenter(function(){
    t6.to($(this), 1, {scale:1.05});
    t6.restart();
  });
  $('#stadia_role').mouseleave(function(){
    t6.reverse();
  });
  $('#work_details_nexttier').mouseenter(function(){
    t7.to($(this), 1, {scale:1.05});
    t7.restart();
  });
  $('#work_details_nexttier').mouseleave(function(){
    t7.reverse();
  });



});