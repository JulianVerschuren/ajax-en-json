$(document).ready(function () {


	var searching;
	$('#claimPhoto').click(function () {


			searching = $('#searchTerm').val();

			alert(searching);

		}

	);

//ik comment er even bij voor me eigen kennis.
//Ik maak hierboven een variabele genaamd searching aan,
//Als er op de submit knop word gedrukt met de ID ''claimPhoto
// dan start de functie, in de functie krijgt searching de waarde van de id van de zoekbalk dit betekent dus dat als je iets intypt searching de waarde van je zoekterm krijgt, dit gaat alleen van start als er op submit gedrukt wordt want dan start de functie
//daarna alert je searching, die ondertussen de waarde heeft gekregen van searchTerm dus dan logged de browser de waarde van searching die gelijk is aan je zoekterm



$('#searchTerm').keydown(function(){





})



})