$(document).ready(function(){
  $( '.nura-technology' ).on( 'click', '.tabs-icons .nav li a', function() {
    stopAll();
    var vidID = $( this ).attr( 'data-vid-target' );
    var vid = $( '#'+vidID )[0];
    var videoBtn = $( '#'+vidID ).parents('figure').find('.videoButton');
    if(videoBtn.hasClass('play')){
      vid.pause();
    }else
    {
      vid.play();  
    }
    
  });

  function stopAll() {
    $( '.nura-technology .tabs-icons .nav li' ).each( function(){
      var vidID = $( this ).find('a').attr( 'data-vid-target' );
      var vid = $( '#'+vidID )[0];
      vid.pause();
      var videoBtn = $( '#'+vidID ).parents('figure').find('.videoButton');
      if(!videoBtn.hasClass('play')){
        vid.currentTime = 0; 
      }
      
    });
  }

   /* UTITLITY */
  function Utils() {

  }

  Utils.prototype = {
     constructor: Utils,
     isElementInView: function (element, fullyInView) {
         var pageTop = $(window).scrollTop();
         var pageBottom = pageTop + $(window).height();
         var elementTop = $(element).offset().top;
         var elementBottom = elementTop + $(element).height();

         if (fullyInView === true) {
             return ((pageTop < elementTop) && (pageBottom > elementBottom));
         } else {
             return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
         }
     }
  };

  var Utils = new Utils();

  $( window ).scroll( function() {
    var vidID = $( '.nura-technology .tabs-icons .nav li.active a' ).attr( 'data-vid-target' );
      var isElementInView = Utils.isElementInView($('#'+vidID), false);
    var vid = $( '#'+vidID )[0];


      if (isElementInView) {
        var videoBtn = $( '#'+vidID ).parents('figure').find('.videoButton');
        if(videoBtn.hasClass('play') || videoBtn.hasClass('replay')){
          vid.pause();
        }
        else{
          vid.play(); 
        }
      }
      else {
        vid.pause();
        // vid.currentTime = 0;
      }
  });












    //video play pause code
   $("#scomode_vid,#dnaframework_vid,#nivids_vid").on(
    "timeupdate", 
    function(event){
      if($(this).is('#scomode_vid')){
        onTrackedVideoFrame(this.currentTime, this.duration, 'scomode_vid');  
      }
      else if($(this).is('#dnaframework_vid')){
        onTrackedVideoFrame(this.currentTime, this.duration, 'dnaframework_vid');  
      }
      else if($(this).is('#nivids_vid')){
        onTrackedVideoFrame(this.currentTime, this.duration, 'nivids_vid');  
      }
    });


  $(document).on('click','.videoButton',function(){
    var myVideo;
    var curId;
    if($('.techNav li:eq(0)').hasClass('active')){
      myVideo = document.getElementById("scomode_vid");
      curId = $('#scomode_vid');
    }
    else if($('.techNav li:eq(1)').hasClass('active')){
      myVideo = document.getElementById("dnaframework_vid"); 
      curId = $('#dnaframework_vid');
    }
    else if($('.techNav li:eq(2)').hasClass('active')){
      myVideo = document.getElementById("nivids_vid"); 
      curId = $('#nivids_vid');
    }
    curId.parents('figure').find('.videoButton').removeClass('play');     
    myVideo.play(); 
  });

  $(document).on('click','#scomode_vid,#dnaframework_vid,#nivids_vid',function(){
    var myVideo; 
    var curId;
     if($('.techNav li:eq(0)').hasClass('active')){
        myVideo = document.getElementById("scomode_vid"); 
        curId = $('#scomode_vid');
    }
    else if($('.techNav li:eq(1)').hasClass('active')){
        myVideo = document.getElementById("dnaframework_vid"); 
        curId = $('#dnaframework_vid');
    }
    else if($('.techNav li:eq(2)').hasClass('active')){
        myVideo = document.getElementById("nivids_vid"); 
        curId = $('#nivids_vid');
    } 
    if (myVideo.paused) {
      curId.parents('figure').find('.videoButton').removeClass('replay');
      curId.parents('figure').find('.videoButton').removeClass('pause');
      curId.parents('figure').find('.videoButton').addClass('play magictime puffOut');
      myVideo.play(); 
      setTimeout(function(){
        curId.parents('figure').find('.videoButton').removeClass('play magictime puffOut');
      },1000);
    }   
    else {
      curId.parents('figure').find('.videoButton').removeClass('replay');
      curId.parents('figure').find('.videoButton').removeClass('play');
      curId.parents('figure').find('.videoButton').addClass('pause magictime puffOut');
      myVideo.pause(); 
      setTimeout(function(){
        curId.parents('figure').find('.videoButton').removeClass('pause magictime puffOut');        
      },1000);
      setTimeout(function(){
        curId.parents('figure').find('.videoButton').addClass('play');
      },1100);
    }   
  });
});

function onTrackedVideoFrame(currentTime, duration, ids){
    // $("#current").text(currentTime);
    // $("#duration").text(duration);
    if(currentTime==16.684 && ids == 'scomode_vid'){
      $("#"+ids).parents('figure').find('.videoButton').removeClass('pause play magictime puffOut');
      $("#"+ids).parents('figure').find('.videoButton').addClass('replay');
    }
    else if(currentTime==17.151 && ids == 'dnaframework_vid'){
      $("#"+ids).parents('figure').find('.videoButton').removeClass('pause play magictime puffOut');
      $("#"+ids).parents('figure').find('.videoButton').addClass('replay');
    }
    else if(currentTime==16.851 && ids == 'nivids_vid'){
      $("#"+ids).parents('figure').find('.videoButton').removeClass('pause play magictime puffOut');
      $("#"+ids).parents('figure').find('.videoButton').addClass('replay');
    }
    else
    {
      $("#"+ids).parents('figure').find('.videoButton').removeClass('replay');
    }
}
