$( document ).ready(function() {
    var countries ={
  "United states": {
    population: "323553345",
   capital: "Washington D.C.",
   language: "English",
    animal: "bald eagle"
  },
  China: {
   population: "1.35 billion",
   capital: "Beijing", 
    language: "Standard Mandarin",
    animal:  "Giant Panda"
  }, 
    France: {
   population:"64668129",
   capital:"paris", 
    language: "France" ,
    animal:  "Gallic rooster"	 
  }
};

   
   $( ".btn-info" ).click(function() {
    var choose = $("#click-me").val();
    alert(countries[choose].capital);
    
     $( "#Population" ). text(countries[choose].population);
     $( "#Language" ). text(countries[choose].language);
      $( "#Animal" ). text(countries[choose].animal);
       $( "#Capital" ). text(countries[choose].capital);
       
       
});
});
