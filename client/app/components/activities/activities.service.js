(function() {
  'use strict';
  angular
    .module('app.activityList')
    .factory('listService', listService);

    listService.$inject = ['$http'];
    var yelp = new yelp({
      consumer_key: 'AokJ1I73m9ZXRKsQwAFk3w',
      consumer_secret: 'RtuBaAZctDIRcvTKWBphtGeXVG0',
      token: 'L5Q9dkCBNNr-GwZDl81mliC8z5OtWJjr',
      token_secret: '5UIuf3CH89z_ODFJsfQA5RDoFLQ'
    });
    function listService($http) {
      var service = {
        getActivities: getActivities,
      };
      return service;
      function getActivities() {
        return $http({
          method: 'GET'
        })
      }
    };


yelp.search({ location: req.query })
  .then(function(data) {
    data.businesses.forEach(function(business) {
      var businessEntry = {};
      businessEntry.id = business.id
      businessEntry.name = business.name;
      businessEntry.rating = business.rating
      businessEntry.rating_img_url_small = business.rating_img_url_small;
      businessEntry.categories = business.categories;
      businessEntry.address = business.location.display_address;

      console.log(businessEntry)
    })

  })
  .catch(function(err) {
    console.log('There was an error: ', err)
  })



})();