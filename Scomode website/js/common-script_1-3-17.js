$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();  

	// var newText = $( '.tab-list li.active a' ).text();
	// $( '.banner-title h1' ).text( newText );

	// var nextText2 =$( 'nav ul.sub-menu.industlink  li.active a' ).text();
	// $( '.banner-title h1' ).text( nextText2 );
	$('body').scrollTop(0);
	var curHref = location.href.split('/');
	if(curHref[curHref.length - 1] == "industries.html"){
		$('#ind-telecome').addClass('in active');
		$( '.banner-title h1' ).text("Telecom");
		$('.ind-tab li:first').addClass('active');
		$('.industlink li:first').addClass('active');
	}

	if(curHref[curHref.length - 1] == "technology.html"){
		$('#scomode').addClass('in active');
		$( '.banner-title h1' ).text("SCOMODE");
		$('.tech-tab li:first').addClass('active');
		$('.tech-link li:first').addClass('active');
	}

	$( '.tab-list' ).on('click','li a',function() {
		var newText = $( this ).text();

		var bgimage = $( this ).attr('data-image');
		$( '.banner-title h1' ).text( newText );

		$( '.nura-banner-sec' ).css({"background":"url(images/banner/"+bgimage+".png)","background-repeat":"no-repeat","background-size":"cover",  "transition":" all 1s"} );
		$('nav li .sub-menu li').removeClass('active');
		$('nav li .sub-menu li a[data-image="'+bgimage+'"]').parent().addClass('active');
		changeUrl($(this).attr('href'));
	});

	$( 'nav ul.sub-menu ' ).on('click','li a',function() {
		var newText2 = $( this ).text();
		$( '.tab-list li' ).removeClass( 'active' ); 

		var bgimage = $( this ).attr('data-image');
		$( '.banner-title h1' ).text( newText2 );
		$('.tab-list li a[data-image="'+bgimage+'"]').parent().addClass('active');
		$( '.nura-banner-sec' ).css({"background":"url(images/banner/"+bgimage+".png)","background-repeat":"no-repeat","background-size":"cover", "transition":" all 1s"} );
		changeUrl($(this).attr('href'));
	});

	$('.footerMenu li a').on('click', function(){
		$('body').scrollTop(0);
		var newText = $( this ).text();

		var bgimage = $( this ).attr('data-image');
		$( '.banner-title h1' ).text( newText );

		$( '.nura-banner-sec' ).css({"background":"url(images/banner/"+bgimage+".png)","background-repeat":"no-repeat","background-size":"cover",  "transition":" all 1s"} );
		$('nav li .sub-menu li').removeClass('active');
		$('nav li .sub-menu li a[data-image="'+bgimage+'"]').parent().addClass('active');

		$('.nav-tabs li').removeClass('active');
		$('.nav-tabs li a[data-image="'+bgimage+'"]').parent().addClass('active');
		changeUrl($(this).attr('href'));
	});

	function changeUrl(hrefId){
		// without reloading changing the url
		var loc= location.href;
		var splitLoc = loc.split('#');
		var newUrl = splitLoc[0]+hrefId+'s';
		window.history.pushState("","",newUrl);
	}

	function changeUrlHash(hrefId){
		// without reloading changing the url
		var loc= location.href;
		var splitLoc = loc.split('?');
		var newUrl = splitLoc[0]+hrefId;
		window.history.pushState("","",newUrl);
	}

	function industriesTab(title,imageText){
		$( '.tab-list li' ).removeClass( 'active' ); 
		$( '.banner-title h1' ).text( title );
		$('.tab-list li a[data-image="'+imageText+'"]').parent().addClass('active');
		$( '.nura-banner-sec' ).css({"background":"url(images/banner/"+imageText+".png)","background-repeat":"no-repeat","background-size":"cover", "transition":" all 1s"} );
		$('nav li .sub-menu.industlink li a[data-image="'+imageText+'"]').parent().addClass('active');
	}

	var url=location.hash;
	switch(url){
		case '#ind-telecomes':
			$('#ind-telecome').addClass('in active');
			industriesTab('Telecom','telecom-banner');
		break;
		case '#ind-powers':
			$('#ind-power').addClass('in active');
			industriesTab('Power','power-banner');
		break;
		case '#ind-minings':
			$('#ind-mining').addClass('in active');
			industriesTab('Mining','mining-banner');
		break;
		case '#ind-smartcitis':
			$('#ind-smartciti').addClass('in active');
			industriesTab('Smart Cities','smartcity-banner');
		break;
		case '#ind-retails':
			$('#ind-retail').addClass('in active');
			industriesTab('Retail','retail-banner');
		break;
		case '#ind-oilgass':
			$('#ind-oilgas').addClass('in active');
			industriesTab('Oil & Gas','oilgas-banner');
		break;


		case '#scomodes':
			$('#scomode').addClass('in active');
			industriesTab('SCOMODE','scomode-banner');
		break;
		case '#dna-frameworkss':
			$('#dna-frameworks').addClass('in active');
			industriesTab('DNA Framework','dna-banner');
		break;
		case '#nividss':
			$('#nivids').addClass('in active');
			industriesTab('NIVIDS','nivids-banner');
		break;
	}

});