$(document).ready(function(){
   $('[data-toggle="tooltip"]').tooltip();  
});
      $( document ).ready(function(){
        var newText = $( '.tab-list li.active a' ).text();
        $( '.banner-title h1' ).text( newText );
      });
    $( '.tab-list' ).on('click','li a',function() {
      var newText = $( this ).text();
	  var bgimage = $( this ).attr('data-image');
      $( '.banner-title h1' ).text( newText );
	  $( '.nura-banner-sec' ).css({"background":"url(images/banner/"+bgimage+".png)","background-repeat":"no-repeat","background-size":"cover"} );
    })