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
  tll = new TimelineLite();
  tll2 = new TimelineLite();
  tll3 = new TimelineLite();
  $('#interlude4').mouseenter(function(){
    tll.to($(this), 0.7, {scale:1.2});
    tll.restart();
  });
  $('#interlude4').mouseleave(function(){
    tll.reverse();
  });
  $('#mario_world_project_topleft').mouseenter(function(){
    tll2.to($(this), 0.7, {css:{backgroundColor:"#3A6683"}});
    tll2.restart();
  });
  $('#mario_world_project_topleft').mouseleave(function(){
    tll2.reverse();
  });
  $('#ttt_project_top_left').mouseenter(function(){
    Tweenlite.to($(this), 0.7, {css:{backgroundColor:"#3A6683"}});
    //tll3.restart();
    //tll3.reverse();
  });

  tl = new TimelineLite();
  tl2 = new TimelineLite();
  tl3 = new TimelineLite();
  tl4 = new TimelineLite();

  $('#cg').mouseenter(function(){
    tl2.to($(this), 0.7, {left:'50px'});
    tl2.restart();
  });
  $('#cg').mouseleave(function(){
    tl2.reverse();
  });
  $('#pwork').mouseenter(function(){
    tl3.to($(this), 0.7, {left:'50px'});
    tl3.restart();
  });
  $('#pwork').mouseleave(function(){
    tl3.reverse();
  });
  $('#interlude').mouseenter(function(){
    tl4.to($(this), 2, {rotation: 360});
    tl4.restart();
  });
  $('#interlude').mouseleave(function(){
    tl4.reverse();
  });
 

  ///////////////////////////////////////
 

});