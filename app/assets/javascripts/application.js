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
  tl = new TimelineLite();
  tl2 = new TimelineLite();
  tl3 = new TimelineLite()

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

  ///////////////////////////////////////
    t = new TimelineLite();
    t2 = new TimelineLite();
    t3 = new TimelineLite();
    t4 = new TimelineLite();
    t5 = new TimelineLite();
    t6 = new TimelineLite();
    t7 = new TimelineLite();
    t8 = new TimelineLite();
    t9 = new TimelineLite();

    $('#interlude').mouseenter(function(){
      t7.to($(this), 0.7, {scale:1.2});
      t7.restart();
    });
    $('#interlude').mouseleave(function(){
      t7.reverse();
    });
    $('#interlude2').mouseenter(function(){
      t8.to($(this), 0.7, {scale:1.2});
      t8.restart();
    });
    $('#interlude2').mouseleave(function(){
      t8.reverse();
    });
    $('#interlude3').mouseenter(function(){
      t9.to($(this), 0.7, {scale:1.2});
      t9.restart();
    });
    $('#interlude3').mouseleave(function(){
      t9.reverse();
    });

    $('#html5').mouseenter(function(){
      t.to($(this), 0.7, {scale:1.2});
      t.restart();
    });
    $('#html5').mouseleave(function(){
      t.reverse();
    });

    $('#CSS3').mouseenter(function(){
      t2.to($(this), 0.7, {scale:1.2});
      t2.restart();
    });
    $('#CSS3').mouseleave(function(){
      t2.reverse();
    });
    $('#js').mouseenter(function(){
      t3.to($(this), 0.7, {scale:1.2});
      t3.restart();
    });
    $('#js').mouseleave(function(){
      t3.reverse();
    });
    $('#ruby').mouseenter(function(){
      t4.to($(this), 0.7, {scale:1.2});
      t4.restart();
    });
    $('#ruby').mouseleave(function(){
      t4.reverse();
    });
    $('#rails').mouseenter(function(){
      t5.to($(this), 0.7, {scale:1.2});
      t5.restart();
    });
    $('#rails').mouseleave(function(){
      t5.reverse();
    });
    $('#ajs').mouseenter(function(){
      t6.to($(this), 0.7, {scale:1.2});
      t6.restart();
    });
    $('#ajs').mouseleave(function(){
      t6.reverse();
    });
 
new Chartkick.PieChart("chart-1", [["Coding",7],["Eating",2],["Exercise",1],["Commuting",1.5],["Leisure",4]], {"colors": ["#BF495E", "#41A693", "#F2EC9B", "#D9CF48", "#D9583B"]});

new Chartkick.BarChart("chart-3", [{name: "Hours Practised", data: [["HTML",200],["CSS",200],["JavaScript",300],["Ruby/Rails",300]]}, {name: "Remaining Hours to Mastery", data: [["HTML",4800],["CSS",4800],["JavaScript",4700],["Ruby/Rails",4700]]}], {'colors': ['#d54d72', 'pink'], max: 5000, stacked: true});


});