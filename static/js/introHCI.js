'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("That's a nice gradient!");
		$("#testjs").text("Thanks for clicking me");
		$(".jumbotron p").toggleClass("active");
		$('.jumbotron').css("background","#a770ef");
		$('.jumbotron').css("background","#-webkit-linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)");
		$('.jumbotron').css("background","linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)");
	});
	$("a.thumbnail").click(projectClick);
	$("img.img").hide();

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
	e.preventDefault();
	var containingProject = $(this).closest(".project");
	var pic = $(containingProject).find("img");
		 pic.fadeToggle();
}
