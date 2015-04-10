// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('songo', ['ionic', 'songo.controllers', 'songo.utils', 'songo.filters'])

.run(function($ionicPlatform, $localstorage, $playlistsFactory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  
  // Set playlists in var
  var lists=null;
  if ($localstorage.get('playlists', null) === null) {
	lists = [{"id":1,"title":"Teacher","genre":"Arabic","songs":[{"id":1,"title":"dui luctus rutrum","author":"Maria Ruiz"},{"id":2,"title":"in quam fringilla rhoncus mauris","author":"Tina Jones"},{"id":3,"title":"odio consequat","author":"Donna Stevens"},{"id":4,"title":"donec","author":"Melissa Simpson"},{"id":5,"title":"lacinia erat vestibulum sed","author":"Amy Evans"},{"id":6,"title":"nonummy","author":"Jose Black"},{"id":7,"title":"ipsum primis","author":"Gloria Campbell"},{"id":8,"title":"tortor risus dapibus augue vel","author":"Kathryn Baker"},{"id":9,"title":"sagittis dui vel nisl duis","author":"Bonnie Johnson"}]},
{"id":2,"title":"Analyst Programmer","genre":"Dhivehi","songs":[{"id":1,"title":"ipsum primis in","author":"Julia Ferguson"},{"id":2,"title":"semper rutrum","author":"Ashley Gilbert"},{"id":3,"title":"libero nam","author":"Chris Howell"},{"id":4,"title":"dapibus duis","author":"Carol Franklin"},{"id":5,"title":"ac","author":"Jeremy Lee"},{"id":6,"title":"luctus nec molestie sed justo","author":"Jean Wheeler"},{"id":7,"title":"et magnis","author":"Brenda Brooks"},{"id":8,"title":"orci luctus et ultrices","author":"Jesse Tucker"},{"id":9,"title":"eget eros elementum pellentesque","author":"Jacqueline Mitchell"},{"id":10,"title":"elementum nullam","author":"Robert Fowler"},{"id":11,"title":"pede posuere nonummy integer","author":"Ashley Fowler"},{"id":12,"title":"mi in porttitor pede","author":"James Roberts"},{"id":13,"title":"ipsum primis in","author":"Anne Bryant"},{"id":14,"title":"nullam orci pede venenatis","author":"Nicole Baker"},{"id":15,"title":"molestie","author":"Virginia Kelley"},{"id":16,"title":"magnis dis parturient montes nascetur","author":"Rachel Graham"},{"id":17,"title":"interdum in ante vestibulum","author":"Stephen Franklin"},{"id":18,"title":"pellentesque quisque","author":"Jerry Johnson"},{"id":19,"title":"molestie lorem quisque","author":"Willie Richards"}]},
{"id":3,"title":"Senior Sales Associate","genre":"Dzongkha","songs":[{"id":1,"title":"semper est quam","author":"Betty Perkins"},{"id":2,"title":"est risus","author":"Jonathan Sanchez"},{"id":3,"title":"morbi odio odio elementum","author":"Lisa Ryan"},{"id":4,"title":"penatibus","author":"Jerry Ward"},{"id":5,"title":"pharetra magna ac consequat","author":"Carl Adams"},{"id":6,"title":"duis faucibus accumsan odio curabitur","author":"Sandra Black"},{"id":7,"title":"ipsum ac tellus semper interdum","author":"Kevin Richardson"},{"id":8,"title":"eleifend luctus ultricies eu","author":"Billy Wheeler"},{"id":9,"title":"ante nulla justo","author":"Scott Cunningham"},{"id":10,"title":"odio condimentum id","author":"Evelyn Carr"},{"id":11,"title":"turpis","author":"Sharon Williams"},{"id":12,"title":"augue","author":"Jane Allen"},{"id":13,"title":"mus vivamus vestibulum sagittis sapien","author":"Adam Woods"},{"id":14,"title":"vestibulum","author":"Douglas Harris"},{"id":15,"title":"purus phasellus in","author":"Karen Hawkins"},{"id":16,"title":"cubilia","author":"Stephanie Scott"},{"id":17,"title":"tortor quis turpis sed ante","author":"Marilyn Clark"},{"id":18,"title":"nibh quisque id","author":"Norma Cunningham"},{"id":19,"title":"curae","author":"Brandon Sullivan"},{"id":20,"title":"libero rutrum","author":"Ruth Lane"}]},
{"id":4,"title":"Librarian","genre":"Romanian","songs":[{"id":1,"title":"ac nibh","author":"Gloria Cole"},{"id":2,"title":"nulla ac","author":"Clarence Rose"},{"id":3,"title":"congue diam","author":"Norma Lawson"},{"id":4,"title":"interdum venenatis","author":"Daniel Richards"},{"id":5,"title":"erat","author":"Howard Tucker"},{"id":6,"title":"phasellus id sapien in","author":"Jimmy Kelly"},{"id":7,"title":"tortor duis mattis egestas","author":"Anne Henderson"},{"id":8,"title":"quis libero nullam sit","author":"Kimberly Howard"},{"id":9,"title":"pulvinar","author":"Howard Mendoza"}]}];
  } else {
	lists = $localstorage.getObject('playlists');
  }
  $playlistsFactory.setObject('playlists', lists);
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.timer', {
    url: "/timer",
    views: {
      'menuContent': {
        templateUrl: "templates/timer.html",
		controller: 'TimerCtrl'
      }
    }
  })

    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  })
  
  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html",
		controller: 'AboutCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/about');
});
