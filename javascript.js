// JavaScript Document


$(document).ready(function(){
	"use strict";
	
	
	alert("The Site's Not Done. I was just trying to see how publishing works and show off to a few people");


	var count;
	count = true;

	//alert(count);
	
	$('.menu').on('click', function(){
		if(count && $(window).width() < 1100){
			window.closeSideMenu();
		}
		else if(!count && $(window).width() < 1100){
			window.openSideMenu();	
		}
	});
		window.openSideMenu = function() {
		var slide = document.getElementById('slide');
		var nav = document.getElementById('nav');
		var navhead = document.getElementById('nav-head');
		$(slide).animate({height:'toggle'},400);
		$(nav).animate({marginTop:'+=520px'},400);
		$(navhead).animate({marginTop:'+=520px'},400);
		$('.fa-caret-down').toggleClass('fa-caret-up');
		count = true;
		//alert(count);
	};
	window.closeSideMenu = function() {
		var slide = document.getElementById('slide');
		var nav = document.getElementById('nav');
		var navhead = document.getElementById('nav-head');
		$(slide).animate({height:'toggle'},400);
		$(nav).animate({marginTop:'-=520px'},400);
		$(navhead).animate({marginTop:'-=520px'},400);
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
