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
		console.log(e.keyCode);
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

	

var getPhotos =	function() {


		var flickLink = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + searching + "&jsoncallback=?"
			$.ajax (

			{

				dataType: 'json',
				method: 'GET',
				url: flickLink,
				success: verwerkfotos

			}
// note to self: altijd success met twee s'en schrijven. !@#$@#$!

		)

	}

	function verwerkfotos(data) {
		console.log(data);
		$('#photos').html(""); //hiermee selecteren we de lege html div photos waar de fotos in komen te staan. de div word ook leeg gemaakt met .html tussenhaakjes leeg
		
for(var i = 0; i <data.items.length; i++) //hier komt een for loop.Ik definieer de loop met ''i'' en geef hem de waarde 0 mee, als de waarde 'i' kleiner is dan de lengte van alle items, dus de hoeveelheid objecten van de zoekresultaten. doe er een bij.
{

var photo = data.items[i]; //hier maak ik een nieuwe variabele photo. deze geef ik de waarde mee van de data van de objecten, en de de element van wat er door de teller = 'i' word aangewezen. dit word een foto. en dit gaan we nu plaatsen in een stukje html.

var htmlCode = "<img src=' " + photo.media.m + "' > ";
// de variabele html code pakt een image source plus de daadwerkelijke foto die opgehaald ism et het zoeken. die photo staat bij media en is m.


$('#photos').append(htmlCode);


//hierboven zoeken we de code op van de photos en selecteren het en dan voegen we de waarde van htmlCode, (dus die foto) toe met append



}



	}

	// deze functie word alleen uitgevoerd als het met succes gedaan is
});

//inplaats van dat ik per functie alert searching doe.  heb ik een functie aangemaakt genaamd getPhotos. die functie alert searching en die functie kan ik nu overal aanroepen. dit is een stuk handiger dan elke keer overnieuw hem moeten aanroepen . hier komt uiteindelijk geen alert meer te staan.




/*
ˆ

 (dit is theo's commentaar bij de video)
Door het json-Object te bestuderen, zie je welke eigenschappen het heeft. Om de afbeeldingen eruit te halen, moet je de items-array in, daarin in een van de objecten gaan, daarin weer media object de m-waarde opvragen.

Dit moet voor alle afbeeldingen gebeuren. Dit doen we daarom met een for-lus statement.

Van elke foto.items[i] wordt de media.m waarde genomen en dat in de src waarde van de img-tag geplaatst. Vervolgens wordt deze html-code toegevoegd met .append() aan de code die tot toe staat in de div-tag met id foto. 


*/






