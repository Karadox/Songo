angular.module('songo.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

  .controller('TimerCtrl', function($scope) {
	var today = new Date();
	
	$scope.data = {};
	
	$scope.data.currentDate = today;
	$scope.data.deviceDate = today;
	$scope.data.requestedDate = today;
	$scope.data.correctedDate = today;
	
	$scope.refreshCurrentTime = function() {
		console.log("refresh time");
		
		var today = new Date();
		$scope.data.currentDate = today;
		
		//$scope.convertTime($scope); execute in html instead of here?
	}
	
	/* device time is different from normal time.
	requested is time on the device relative to normal time.
	the difference between normal time and device time plus or minus the requested time.
	*/
	$scope.convertTime = function() {
		console.log('Doing convert', $scope.data);
	
		var currentDate = new Date($scope.data.currentDate); // hidden input set when loaded?
		var deviceDate = new Date($scope.data.deviceDate);
		var requestedDate = new Date($scope.data.requestedDate);
		var difference = deviceDate-currentDate; // in miliseconds
		// get mills from request subtract difference. negative will be plus.
		var correctedDate = new Date(requestedDate.getTime() - difference);
			console.log('Difference: ' + difference);
			console.log('Solution: ' + correctedDate);
		
		$scope.timeSolution = correctedDate.toString();
		
		$scope.data.correctedDate = correctedDate;
	}

})
  
.controller('PlaylistsCtrl', function($scope, $playlistsFactory) {
	//$scope.playlists = $localstorage.getObject('playlists'); // Get device list
	
	$scope.playlists =  $playlistsFactory.getObject('playlists', null)
	
//	console.log("playlists:", $scope.playlists);
/*	
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
*/
})

.controller('PlaylistCtrl', function($scope, $stateParams, $playlistsFactory, $filter) {
	console.log('PL-Id: ' + $stateParams.id);
	
	$scope.playlists = $playlistsFactory.getObject('playlists');

	$playlist = $filter('getById')($scope.playlists, $stateParams.id);
	console.log('playlist:', $playlist);
	
	$scope.currentList = $playlist;
})

.controller('AboutCtrl', function($scope, $http, $localstorage, $playlistsFactory, $ionicHistory) {
	$scope.refreshPlaylists = function() {
		//$http.get('http://192.168.178.19:8100/playlists.json').then(function(resp) {
		$http.get('https://karadox.nl/playlists.json').then(function(resp) {
			console.log('Success', resp);
			// For JSON responses, resp.data contains the result
			//$scope.playlists = resp.data;
			$localstorage.setObject('playlists', resp.data);
			$playlistsFactory.setObject('playlists', resp.data);
			
			$ionicHistory.clearCache();
		}, function(err) {
			console.error('ERR', err);
			// err.status will contain the status code
		})
	}
})

// EOF
;
