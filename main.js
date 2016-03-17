window.onload = function() {

var submitButton = document.querySelector('.submit');
var inputBox = document.querySelector('.search');
//test out url
submitButton.addEventListener('click', function(evt){
  evt.preventDefault();

  // var query;

  $.ajax({
    url: 'http://api.eia.gov/series/?api_key=' + EIA_KEY  + '&series_id=ELEC.CONS_TOT.PEL-' + inputBox.value + '-96.A'
  }).done(function(reply){
      console.log(reply);
  })// end .done submit button

// call to get population data for state
  $.ajax({
    url: 'http://api.census.gov/data/2015/pep/population?get=POP,GEONAME&for=state:' + inputBox.value + '&key=' + CENSUS_KEY,
  }).done(function(reply){
    console.log(reply);
  })// end pop data .done

})// end submit button event listener




}// end window onload
