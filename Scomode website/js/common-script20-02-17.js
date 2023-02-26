$(document).ready(function(){
   $('[data-toggle="tooltip"]').tooltip();  
});
      $( document ).ready(function(){
        var newText = $( '.tab-list li.active a' ).text();
        $( '.banner-title h1' ).text( newText );
		
		var nextText2 =$( 'nav ul.sub-menu.industlink  li.active a' ).text();
		 $( '.banner-title h1' ).text( nextText2 );
      });
    $( '.tab-list' ).on('click','li a',function() {
      var newText = $( this ).text();
	  
	  var bgimage = $( this ).attr('data-image');
      $( '.banner-title h1' ).text( newText );
	  
	  $( '.nura-banner-sec' ).css({"background":"url(images/banner/"+bgimage+".png)","background-repeat":"no-repeat","background-size":"cover",  "transition":" all 1s"} );
	  $('nav li .sub-menu.industlink li').removeClass('active');
	   $('nav li .sub-menu.industlink li a[data-image="'+bgimage+'"]').parent().addClass('active');
    })
	
	 $( 'nav ul.sub-menu ' ).on('click','li a',function() {
      var newText2 = $( this ).text();
	   $( '.tab-list li' ).removeClass( 'active' ); 
	   
	  var bgimage = $( this ).attr('data-image');
      $( '.banner-title h1' ).text( newText2 );
	   $('.tab-list li a[data-image="'+bgimage+'"]').parent().addClass('active');
	  $( '.nura-banner-sec' ).css({"background":"url(images/banner/"+bgimage+".png)","background-repeat":"no-repeat","background-size":"cover", "transition":" all 1s"} );
    })