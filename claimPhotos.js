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
	//daarna alert je searching, die ondertussen de waarde heeft gekregen van searchTerm dus dan logged de browser de waarde van searching die gelijk is aan je zoekterm hier komt geen alert meer



	$('#searchTerm').keydown(function (e) {

			if (e.keyCode == 13) {

				searching = $('#searchTerm').val();
				getPhotos();
				//alert(searching);
				
			}



		});
		//wat hierboven gebeurd is bijna het zelfde als wat er in de eerste functie gebeurt maar dan ietsje anders
		// hier maak ik een function die start op het moment dat je op je enter toets drukt. als je dus ''banaan'' invult op de plaats van de zoekterm in de zoekbalk en je drukt op enter dan logt ie ''banaan''
		//de event is een keydown event in plaats van een click event. argument dat je mee geeft is e van event, als event.keyCode gelijk is aan nummer 13 (dat is de codenaam van enter) dan krijgt de variabele searching die al eerder aangemaakt is de waarde van de searchTerm. dan start de functie en alert je searching weer.
		//ik zou eventueel searchTerm kunnen vervangen met ''this'' want het is namelijk hetzelfde als het gene dat de gebeurtenis veroorzaakt. voor het gemak en duidelijkheid heb ik gewoon searchTem laten staan hier komt geen alert meer




		//alert(searching);
		//hieronder stond een url van flickr met lente erin. die verwees
		//je naar een lente pagina met fotos en dergelijke op flickr
		//ik heb lente vervangen door mijn variabele searching die de waarde van me searchTerm heeft, hiermee zorg ik er straks voor dat
		//de zoekterm fotos van flickr ophaalt.

	

	function getPhotos() {


		var flickLink = " http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + searching + "&jsoncallback=? "
			$.ajax (

			{

				dataType: 'json',
				method: 'GET',
				url: flickLink,
				succes: verwerkfotos

			}


		)

	}

	function verwerkfotos(data) {
		console.log(data);
		

	}

	// deze functie word alleen uitgevoerd als het met succes gedaan is
});

//inplaats van dat ik per functie alert searching doe.  heb ik een functie aangemaakt genaamd getPhotos. die functie alert searching en die functie kan ik nu overal aanroepen. dit is een stuk handiger dan elke keer overnieuw hem moeten aanroepen . hier komt uiteindelijk geen alert meer te staan.