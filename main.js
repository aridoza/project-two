window.onload = function() {

var submitButton = document.querySelector('.submit');
var inputBox = document.querySelector('.search');
//test out url
submitButton.addEventListener('click', function(evt){
  evt.preventDefault();

  // var query;

  //avg per household was 911kwH per month; (divide monthly by this to get per household)

  $.ajax({
    url: 'http://api.eia.gov/series/?api_key=' + EIA_KEY  + '&series_id=ELEC.CONS_TOT.PEL-' + inputBox.value + '-96.A'
  }).done(function(reply){
      console.log(reply);

      var data = {desc: '', units: '', year1: '', amt1: '', year2: '', amt2: '', year3: '', amt3: ''};

      data.desc = reply.series[0].description;
      data.units = reply.series[0].units;
      data.year1 = reply.series[0].data[0][0];
      data.amt1 =
      data.year2 =
      data.amt2 =
      data.year3 =
      data.amt3 =



      var energyData = document.querySelector('.energy-data').innerHTML;
      var template = Handlebars.compile(energyData);
      var newHTML = template(data);

      var energyDiv = document.querySelector('.energy-div');
      energyDiv.innerHTML = newHTML;

  })// end .done submit button



})// end submit button event listener




}// end window onload
