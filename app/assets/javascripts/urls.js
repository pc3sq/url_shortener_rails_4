// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready( function () {
	$(".click_up_1").click( function() {
		var targetId = $(this).data("id");
		event.preventDefault();
		$.ajax({
			url: 'click_count_up_1',
			method: 'POST',
			data: { id: $(this).data("id") }
		}).done( function (response) {
			var selector = "span[data-id=" + targetId + "]";
			$(selector).html(response);
			alert("Success!");
		}).fail( function (response) {
			console.log("Failed");
		})
	})
}) 