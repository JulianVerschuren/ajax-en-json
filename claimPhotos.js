$(document).ready(function () {


	var searching;
	$('#claimPhoto').click(function () {


			searching = $('#searchTerm').val();
			getPhotos();
			//alert(searching);

		}

	);

//ik comment er even bij voor me eigen kennis.
//Ik maak hierboven een variabele genaamd searching aan,
//Als er op de submit knop word gedrukt met de ID ''claimPhoto
// dan start de functie, in de functie krijgt searching de waarde van de id van de zoekbalk dit betekent dus dat als je iets intypt searching de waarde van je zoekterm krijgt, dit gaat alleen van start als er op submit gedrukt wordt want dan start de functie
//daarna alert je searching, die ondertussen de waarde heeft gekregen van searchTerm dus dan logged de browser de waarde van searching die gelijk is aan je zoekterm



$('#searchTerm').keydown(function(e){

if (e.keyCode == 13){

searching = $('#searchTerm').val();
getPhotos();
//alert(searching);

}



})
//wat hierboven gebeurd is bijna het zelfde als wat er in de eerste functie gebeurt maar dan ietsje anders
// hier maak ik een function die start op het moment dat je op je enter toets drukt. als je dus ''banaan'' invult op de plaats van de zoekterm in de zoekbalk en je drukt op enter dan logt ie ''banaan''
//de event is een keydown event in plaats van een click event. argument dat je mee geeft is e van event, als event.keyCode gelijk is aan nummer 13 (dat is de codenaam van enter) dan krijgt de variabele searching die al eerder aangemaakt is de waarde van de searchTerm. dan start de functie en alert je searching weer.
//ik zou eventueel searchTerm kunnen vervangen met ''this'' want het is namelijk hetzelfde als het gene dat de gebeurtenis veroorzaakt. voor het gemak en duidelijkheid heb ik gewoon searchTem laten staan


function getPhotos(){

alert(searching);

}

})

//inplaats van dat ik per functie alert searching doe.  heb ik een functie aangemaakt genaamd getPhotos. die functie alert searching en die functie kan ik nu overal aanroepen. dit is een stuk handiger dan elke keer overnieuw hem moeten aanroepen .