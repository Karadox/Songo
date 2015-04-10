angular.module('songo.utils', [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  };
}])

.factory('$playlistsFactory', [function() {
  var items = {};
  return {
    set: function(key, value) {
      items[key] = value;
    },
    get: function(key, defaultValue) {
      return items[key] || defaultValue;
    },
    setObject: function(key, value) {
      items[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse(items[key] || '{}');
    }
  };
}]);