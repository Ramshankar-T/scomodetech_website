$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();  

	// var newText = $( '.tab-list li.active a' ).text();
	// $( '.banner-title h1' ).text( newText );

	// var nextText2 =$( 'nav ul.sub-menu.industlink  li.active a' ).text();
	// $( '.banner-title h1' ).text( nextText2 );
	$(window).scrollTop(0);
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
		changeBanner(newText);
		
		$('nav li .sub-menu li').removeClass('active');
		$('nav li .sub-menu li a[data-image="'+bgimage+'"]').parent().addClass('active');

		/*else{
			$( '.nura-banner-sec' ).css({"background":"url(images/banner/"+bgimage+".png)","background-repeat":"no-repeat","background-size":"cover",  "transition":" all 1s"} );
			$( '.banner-title h1' ).text( newText );
		}*/
		// changeUrl($(this).attr('href'));
		
	});

	function changeBanner(title){
		var img;
		if(title == "Telecom"){
			img=['Telecom1.png','Telecom2.jpg','Telecom3.jpg'];
			$('.bannerTitle').text(title);
		}
		else if(title == "Power"){
			img=['Power1.png','Power2.jpg','Power3.jpg'];
			$('.bannerTitle').text(title);
		}
		else if(title == "Mining"){
			img=['Mining1.png','Mining2.jpg','Mining3.jpg'];
			$('.bannerTitle').text(title);
		}
		else if(title == "Smart Cities"){
			img=['Smartcities1.png','Smartcities2.jpg','Smartcities3.jpg'];
			$('.bannerTitle').text(title);
		}
		else if(title == "Retail"){
			img=['Retail1.png','Retail2.jpg','Retail3.jpg'];
			$('.bannerTitle').text(title);
		}
		else if(title == "Agri IOT"){
			img=['Agri1.png','Agri2.jpg','Agri3.jpg'];
			$('.bannerTitle').text(title);
		}
		else if(title == "Oil & Gas"){
			img=['Oilgas1.png','Oilgas2.jpg','Oilgas3.jpg'];
			$('.bannerTitle').text(title);
		}
		else if(title == "SCOMODE"){
			img=['Scomode1.png','Scomode2.jpg','Scomode3.jpg'];
			$('.bannerTitle').text(title);
		}
		else if(title == "DNA Framework"){
			img=['Dna1.png','Dna2.jpg','Dna3.jpg'];
			$('.bannerTitle').text(title);
		}
		else if(title == "NIVIDS"){
			img=['Nivids1.png','Nivids2.jpg','Nivids3.jpg'];
			$('.bannerTitle').text(title);
		}
		
		$('.owl-carousel .item').each(function(i){
        	$(this).attr('style','background:url(./images/banner_assets/'+img[i]+') no-repeat;background-size: cover; background-position: center center;');	
        	// var classToRemove=this.className.match(/item-img\d{0,2}/)[0];
        	// $(this).removeClass(classToRemove).addClass(img[i]);	
		});
	}

	$( 'nav ul.sub-menu ' ).on('click','li a',function(e) {
		if(e.ctrlKey && $(e.currentTarget).attr('href').indexOf('html') != -1){
			return;
		}

		$(window).scrollTop(0);		
		var newText2 = $( this ).text();
		changeBanner(newText2);
		$( '.tab-list li' ).removeClass( 'active' ); 

		var bgimage = $( this ).attr('data-image');		
		$('.tab-list li a[data-image="'+bgimage+'"]').parent().addClass('active');
		// $( '.banner-title h1' ).text( newText2 );
		// $( '.nura-banner-sec' ).css({"background":"url(images/banner/"+bgimage+".png)","background-repeat":"no-repeat","background-size":"cover", "transition":" all 1s"} );
		// changeUrl($(this).attr('href'));
	});

	$('.footerMenu li a').on('click', function(){
		$(window).scrollTop(0);
		var newText = $( this ).text();
		changeBanner(newText);
		var bgimage = $( this ).attr('data-image');
		$('nav li .sub-menu li').removeClass('active');
		$('nav li .sub-menu li a[data-image="'+bgimage+'"]').parent().addClass('active');

		$('.nav-tabs li').removeClass('active');
		$('.nav-tabs li a[data-image="'+bgimage+'"]').parent().addClass('active');

		// $( '.banner-title h1' ).text( newText );
		// $( '.nura-banner-sec' ).css({"background":"url(images/banner/"+bgimage+".png)","background-repeat":"no-repeat","background-size":"cover",  "transition":" all 1s"} );
		// changeUrl($(this).attr('href'));
	});

	function changeUrl(hrefId){
		// without reloading changing the url
		var loc= location.href;
		var splitLoc = loc.split('#');
		var newUrl = splitLoc[0]+hrefId+'s';
		window.history.pushState("","",newUrl);
	}


	/*function changeUrlHash(hrefId){
		// without reloading changing the url
		var loc= location.href;
		var splitLoc = loc.split('?');
		var newUrl = splitLoc[0]+hrefId;
		window.history.pushState("","",newUrl);
	}*/

	function industriesTab(title,imageText){
		changeBanner(title);
		$( '.tab-list li' ).removeClass( 'active' ); 
		// $( '.banner-title h1' ).text( title );
		$('.tab-list li a[data-image="'+imageText+'"]').parent().addClass('active');
		// $( '.nura-banner-sec' ).css({"background":"url(images/banner/"+imageText+".png)","background-repeat":"no-repeat","background-size":"cover", "transition":" all 1s"} );
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
		case '#ind-agriiots':
			$('#ind-agriiot').addClass('in active');
			industriesTab('Agri IOT','agriiot-banner');
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