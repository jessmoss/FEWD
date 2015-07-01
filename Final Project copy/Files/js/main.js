

//connect mapdots to cards
$( ".mapdot" ).click(function() {

  $( ".card" ).hide();

  var park = $(this).data("park");                   
  
  console.log(park);

  console.log($( "#baltimore-card").size());

  $( "#" + park + "-card").show();
  
  $(".mapdot").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
  
});


$( ".been-here" ).click(function() {
  $( this ).toggleClass( "yesbeen" );
  $(".mapdot.active").toggleClass ( "yesbeen");
  
  var total= $('.mapdot.yesbeen').length;
  $(".count-total").text(total);
  
});