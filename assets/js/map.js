// $("#map-search").on("click", function () {

//     parseInt($("#term-search").val().trim());

// });

// function initMap() {
//     // Empties Map div, grabs user input stores into a variable
//     $("#map-search").on("click", function () {
//         event.preventDefault
//         $("#map-container").empty()
//         var latCoord;
//         var lngCoord;
//         var term = parseInt($("#term-search").val().trim());
//         console.log(term)
//         var queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + term + '&key=AIzaSyAKa4m_Ooo8qlbVWFjc_5ajgvBiaPFUs9M'

//         // ajax call based on term variable, changes term var into lat and lng coordinates
//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         }).then(function (response) {
//             var results = response.results;
//             console.log(results)
//             console.log(results[0].geometry.location.lng);
//             console.log(results[0].geometry.location.lat);
//             lngCoord = results[0].geometry.location.lng;
//             latCoord = results[0].geometry.location.lat;
//             // Object to set center point of map to Coordinates, how zoomed in the map is
//             var options = {
//                 zoom: 16,
//                 center: {
//                     lat: latCoord,
//                     lng: lngCoord
//                 }
//             }
//             console.log(options)
//             // Makes map based on options properties, places it in map div            
//             var display = new google.maps.Map(document.getElementById('map-container'), options);

//             console.log(display)
//         });
//     });
// }

var map;
var latCoord;
var lngCoord;
var updateMap;
// function initMap(){

    $("#map-search").on("click",function(){
        event.preventDefault
        $("#map-container").empty()
        
        var term =  parseInt($("#term-search").val().trim());
        var queryURL ='https://maps.googleapis.com/maps/api/geocode/json?address=' + term + '&key=AIzaSyAKa4m_Ooo8qlbVWFjc_5ajgvBiaPFUs9M'

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            var results = response.results;
            console.log(results)
            console.log(results[0].geometry.location.lng);
            console.log(results[0].geometry.location.lat);
             lngCoord = results[0].geometry.location.lng;
             latCoord = results[0].geometry.location.lat;

             var options = {
                zoom:16,
                center:{lat:latCoord, lng: lngCoord}
             }
             console.log(options)
             map = new google.maps.Map(document.getElementById('map-container'), options);
             var image = "http://maps.google.com/mapfiles/ms/icons/bar.png"
             var coords = {
              latCoords: [40.763574, 40.763590, 40.762751, 40.763117, 40.764407],
              lngCoords: [-73.913935, -73.914686, -73.913517, -73.912463, -73.914375],
              name: ['Smith', 'Wollensky', 'Bernadin', 'Pegasus', 'Guinesses'],
              sale: [true, false, false, true, false]
            };

             for(let i=0; i<coords.latCoords.length; i++){
               let position = {lat:coords.latCoords[i],lng:coords.lngCoords[i]};
               let sale = '';
               if (coords.sale[i] === true ) {
                 sale = 'HUGE SALE'
               }
               let barNum = i+1
               let infowindow = new google.maps.InfoWindow({
                content: '<h2>bar ' + coords.name[i] + "</h2><p>" + "zipcode: 11103</p>" + "<h1>" + sale  + "</h1>"
              });
            
                let marker = new google.maps.Marker({
                position: position,
                map: map,
                title: "barnumber " + barNum,
                icon:image
                

              });
              marker.addListener('click', function() {
                infowindow.open(map, marker);
              });
             }
  

            //  var marker = new google.maps.Marker({
            //     position: {lat:latCoord, lng: lngCoord},
            //     map: map,
            //     title: 'Hello World!'
            //   });
            //  console.log(map)
            });
          });

      // $("#bar-search").on("click",addMarkers);
      // function addMarkers(){
      //   console.log('adding marker to ', map)
      //   var coords = {
      //       latCoords: [40.763574, 40.763590, 40.762751, 40.763117, 40.764407],
      //       lngCoords: [-73.913935, -73.914686, -73.913517, -73.912463, -73.914375]
      //   };

      //   var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
      //   new google.maps.Marker ({
      //     postion: {lat: coords.latCoords[0] , lng: coords.lngCoords[0] },
      //     map: map,
      //     title: 'test title'
      //     // icon: image
      //   })

        
             
            
      //   };
     