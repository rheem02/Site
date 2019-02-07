// JavaScript Document


$(document).ready(function(){
	"use strict";
	
	$(".scroll-to").click(function(e) {
		e.preventDefault();
		
		var position = $($(this).attr("href")).offset().top;
	
		$("body, html").animate({
			scrollTop: position
		},500, "linear" );
	});
		
    
});
