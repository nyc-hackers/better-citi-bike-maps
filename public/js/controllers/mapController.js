var citibikeMap = angular.module('citibikeMap',[]);

citibikeMap.controller('mapController', ['$scope', '$http', function ($scope, $http) {
	$scope.stations = [];
	$http({
	  method: 'GET',
	  url: 'http://localhost:9393/station-status'
	}).then(function successCallback(response) {
		$scope.stations = response.data.stationBeanList;
	}).then(function(result){
		google.maps.event.addDomListener(window, 'load', function(){
		  var properties = {
		    center:new google.maps.LatLng(40.7293866,-73.9275324),
		    zoom:10,
		    mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
		  var map = new google.maps.Map(document.getElementById("googleMap"), properties);

		  $scope.stations.forEach(function(station){
				var marker = new google.maps.Marker({
				  position: new google.maps.LatLng(station.latitude, station.longitude),
				});

				marker.setMap(map);
		  });
		});		
	}, function errorCallback(response) {
	  console.error("DIDN'T WORK, FOOL!");
	});
}
]);
