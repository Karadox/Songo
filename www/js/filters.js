angular.module('songo.filters', [])

.filter('dateFltr', function($filter)
{
 return function(input)
 {
  if(input === null){ return ""; }
 
  var _date = $filter('date')(new Date(input), 'dd-MM-yyyy');
 
  return _date.toUpperCase();

 };
})

.filter('timeFltr', function($filter)
{
 return function(input)
 {
  if(input === null){ return ""; }
 
  var _date = $filter('date')(new Date(input), 'MM-dd-yyyy - HH:mm');
 
  return _date.toUpperCase();

 };
})

.filter('getById', function() {
  return function(input, id) {
    var i=0, len=input.length;
    for (; i<len; i++) {
      if (+input[i].id == +id) {
        return input[i];
      }
    }
    return null;
  };
})

// EOF
;
