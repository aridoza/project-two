window.onload = function() {

var submitButton = document.querySelector('.submit');
var inputBox = document.querySelector('.search');
//test out url
submitButton.addEventListener('click', function(evt){
  evt.preventDefault();

  var fullBGRD = document.querySelector('.fullBGRD');
  fullBGRD.src = "";
  var backgroundImg;
  // var query;

  //avg per household was 911kwH per month; (divide monthly by this to get per household)


  // annual coal production by state
  $.ajax({
    url: 'http://api.eia.gov/series/?api_key=' + EIA_KEY + '&series_id=SEDS.CLPRB.' + inputBox.value + '.A',
  }).done(function(reply){
      console.log(reply);


      var data = {desc: '', amt1: ''};

      data.desc = reply.series[0].name;
      data.amt1 = Math.round(reply.series[0].data[0][1]);

      // calculate cubic feet in kwh
      // 1 Mwh = 1000 kwh
      // convert to mwh (cleaner, less numbers)
      // kilowatt hours * 3.412 = cubic feet
      //


      var energyData = document.querySelector('.energy-data').innerHTML;
      var template = Handlebars.compile(energyData);
      var newHTML = template(data);

      var energyDiv = document.querySelector('.energy-div');
      energyDiv.innerHTML = newHTML;

      if(inputBox.value === "NY"){
        fullBGRD.src = "http://www.ssn.tv/wp-content/uploads/2014/07/NYC-1.jpg";
      } if(inputBox.value === "CA"){
        fullBGRD.src = "http://lateralledger.com/wp-content/uploads/2015/01/millbrae-california-attractions-top.jpg";
      } if(inputBox.value === "TX"){
        fullBGRD.src = "http://travelchannel.sndimg.com/content/dam/images/travel/fullset/2012/09/14/a0/texas-historic-sites-alamo.rend.tccom.616.462.jpeg";
      } if(inputBox.value === "VT"){
        fullBGRD.src = "http://www.tuckerhill.com/wp-content/uploads/2011/06/welcome-to-vermont-road-sign.jpg";
      }



  })// end .done submit button


  // Total natural gas production (marketed) (updated: IN BTUs)
  // Marketed production: Gross withdrawals less gas used for repressuring, quantities vented and flared,
  // and nonhydrocarbon gases removed in treating or processing operations. Includes all quantities of
  // gas used in field and processing plant operations.
  $.ajax({
    url: 'http://api.eia.gov/series/?api_key=' + EIA_KEY + '&series_id=SEDS.NGMPB.' + inputBox.value + '.A',
  }).done(function(reply2){
    console.log(reply2);

    var dataNGProd = {desc: '', amt1: ''};

    dataNGProd.desc = reply2.series[0].name;
    dataNGProd.amt1 = Math.round(reply2.series[0].data[0][1]);

    var productionData = document.querySelector('.production-data').innerHTML;
    var template2 = Handlebars.compile(productionData);
    var newHTML2 = template2(dataNGProd);

    var productionDiv = document.querySelector('.production-div');
    productionDiv.innerHTML = newHTML2;

  }); //end .done natural gas production

  // energy produced by nuclear power
  $.ajax({
    url: 'http://api.eia.gov/series/?api_key=' + EIA_KEY + '&series_id=SEDS.NUETB.' + inputBox.value + '.A',
  }).done(function(reply3){
    console.log(reply3);

    var dataNuke = {desc: '', amt1: ''};

    dataNuke.desc = reply3.series[0].name;
    dataNuke.amt1 = Math.round(reply3.series[0].data[0][1]);

    var nuclearData = document.querySelector('.nuclear-data').innerHTML;
    var template4 = Handlebars.compile(nuclearData);
    var newHTML4 = template4(dataNuke);

    var nuclearDiv = document.querySelector('.nuclear-div');
    nuclearDiv.innerHTML = newHTML4;
  })// end .done nuclear production

 // annual renewable energy production
  $.ajax({
    url: 'http://api.eia.gov/series/?api_key=' + EIA_KEY + '&series_id=SEDS.REPRB.' + inputBox.value + '.A',
  }).done(function(reply4){
    console.log(reply4);

    var dataSP = {desc: '', amt1: ''};

    dataSP.desc = reply4.series[0].name;
    dataSP.amt1 = Math.round(reply4.series[0].data[0][1]);

    var solarpData = document.querySelector('.solarp-data').innerHTML;
    var template3 = Handlebars.compile(solarpData);
    var newHTML3 = template3(dataSP);

    var solarpDiv = document.querySelector('.solarp-div');
    solarpDiv.innerHTML = newHTML3;
  }) //end .done solar energy production


  // Total energy consumption
  $.ajax({
    url: 'http://api.eia.gov/series/?api_key=' + EIA_KEY + '&series_id=SEDS.TETCB.' + inputBox.value + '.A',
  }).done(function(reply5){
    console.log(reply5);

    var dataTot = {desc: '', amt1: ''};

    dataTot.desc = reply5.series[0].name;
    dataTot.amt1 = Math.round(reply5.series[0].data[0][1]);

    var totalData = document.querySelector('.total-data').innerHTML;
    var template5 = Handlebars.compile(totalData);
    var newHTML5 = template5(dataTot);

    var totalDiv = document.querySelector('.total-div');
    totalDiv.innerHTML = newHTML5;
  })


  // annual population
  $.ajax({
    url: 'http://api.eia.gov/series/?api_key=' + EIA_KEY + '&series_id=SEDS.TPOPP.' + inputBox.value + '.A',
  }).done(function(reply6){
    console.log(reply6);
  })




})// end submit button event listener


// $('#s04').click(function(){
//   alert("ow!")
// })

// $('map').hide('slow').show(1000);

}// end window onload
