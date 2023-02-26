
$(document).ready(function()
{
jQuery("#examplees1").radialProgress("init", {
  'size': 100,
  'fill': 5,  
  'color': "#16c2c8"  
}).radialProgress("to", {'perc': 10, 'time': 7000});

jQuery("#examplees2").radialProgress("init", {
  'size': 100,
  'fill': 5,  
  'color': "#16c2c8"  
}).radialProgress("to", {'perc': 50, 'time': 7000});

jQuery("#examplees3").radialProgress("init", {
  'size': 100,
  'fill': 5,  
  'color': "#16c2c8"  
}).radialProgress("to", {'perc': 30, 'time': 7000});

});

