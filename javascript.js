// JavaScript Document


$(document).ready(function(){
	"use strict";
	
	
	//alert("The Site's Not Done. I was just trying to see how publishing works and show off to a few people");

	/*var slide = document.getElementById('slide');*/
	
	var count;
	count = true;

	//alert(count); (count && $(window).height() < 795)
	/*alert(slideHeight);*/
	
	
	$('.menu').on('click', function(){
		if(count && $(window).width() < 1100){
			window.closeSideMenu();
		}
		else if(!count && $(window).width() < 1100){
			window.openSideMenu();	
		}
		else if(count && $(window).height() < 795){
			window.closeSideMenu();
		}
		else if(!count && $(window).height() < 795){
			window.openSideMenu();	
		}
		else if(count && $(window).height() < 795 && $(window).width() < 1100){
			window.closeSideMenu();
		}
		else if(!count && $(window).height() < 795 && $(window).width() < 1100){
			window.openSideMenu();
		}
	});

	window.openSideMenu = function() {
		var slide = document.getElementById('slide');
		var nav = document.getElementById('nav');
		var navhead = document.getElementById('nav-head');
		var slideHeight = $(slide).height();		
		/*slideHeight = slideHeight + 50;*/
		$(slide).animate({height:'toggle'},400);
		/*$(nav).animate({boxShadow: "0px 3px 3px #d4d4d4"}, 400);
		$(nav).animate({marginTop:'+=520px'},400);
		$(navhead).animate({marginTop:'+=520px'},400);
		$(nav).animate({top: slideHeight + 'px'},400);
		$(navhead).animate({top: slideHeight + 'px'},400);*/
		$('.fa-caret-down').toggleClass('fa-caret-up');
		count = true;
		//alert(count);
	};
	
	window.closeSideMenu = function() {
		var slide = document.getElementById('slide');
		var nav = document.getElementById('nav');
		var navhead = document.getElementById('nav-head');
		/*var slideHeight = $(slide).height();
		slideHeight = slideHeight + 95;*/
		$(slide).animate({height:'toggle'},400);
		/*$(nav).animate({boxShadow: "none"}, 400);
		$(nav).animate({marginTop:'-=520px'},400);
		$(navhead).animate({marginTop:'-=520px'},400);
		$(nav).animate({top:'0px'},400);
		$(navhead).animate({top:'0px'},400);*/
		$('.fa-caret-up').toggleClass('fa-caret-up');
		count = false;
		//alert(count);
	};
	
	
	count = 0;
		
	var fixed = document.getElementById('slide');
	fixed.addEventListener('touchmove', function(e) {
			e.preventDefault();
	}, false);
		
    
});
