// window.function = function (str) {
//   str = str.value ?? "";
//   return str.random();
// }

var theNames = [ "Mark", "Corinne", "Brittany", "Carson", "John", "Mike", "Jordan", "Whitney", "Josh", "Sabian", "Ty", "Leslie" ];
var sortedList = theNames.sort();

$(document).ready(function() {
	
	$('.numerator, .denominator').text($(theNames).length);
	for (i = 0; i < sortedList.length; i++) {
		
		$("<li>" + sortedList[i] + "</li>").appendTo($('#the-names'));
	};
	
	$("#run-it").on('click', function() {
		
		function chooseRando() {
			
			var randomPick = Math.floor(Math.random() * theNames.length) + 1; 
			var pickedLI = $('#the-names li:nth-child(' + randomPick + ')').text();
			if (!$('#the-names li:nth-child('+randomPick+')').hasClass('crossed')) {
				
				$('#the-names li:nth-child('+randomPick+')').addClass('crossed');
				$('#selected-name').text(pickedLI);
				$('.numerator').text($('#the-names li:not(.crossed)').length);
				
			} else {
				
				chooseRando();
			}
		}
		
		if (!$('#the-names li:not(.crossed)').length) {

			alert('You are out of names!!');
			$('#run-it').addClass('all-done');

		} else {

			chooseRando();
		}
	})
	
	$('#start-over').on('click', function() {
	
		$("#the-names li.crossed").removeClass('crossed');
		$("#selected-name").text("");
		$('.numerator, .denominator').text($(theNames).length);
		
	})
}) // doc ready
