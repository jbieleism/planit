(function() {

 'use strict';

  angular
    .module('app.activityList')
    .controller('ActivityController', ActivityController);

  ActivityController.$inject = ['$scope', '$state', 'activityService'];

  function ActivityController($scope, $state, activityService) {
    var vm = this;
    vm.possibleActivities = [];
    vm.getActivities = getActivities;
    vm.getSelectedActivity = getSelectedActivity;

    vm.getActivities();

    function getActivities() {
      // $scope.$parent.test = 'overwrite parent test from activity controller';
      console.log('inside controller getActivities');
      return activityService.getActivities()
        .then(function(data) {
          data.forEach(function(entry){
            var splitz = entry.address.split('');
            for (var i = 0; i < splitz.length; i++) {
              var temp = '';
              if (splitz[i] === '"' || splitz[i] === '{' || splitz[i] === '}') {
                splitz[i] = temp;
              } else if (splitz[i] === ',') {
                splitz[i] += ' ';
              }
            }
            splitz = splitz.join('');
            entry.address = splitz;
          });
          vm.possibleActivities = data;
          console.log('got possibleActivities', data);
        })
        .catch(function(err) {
          console.log("There was an error: ", err);
          return err;
        });
    }

    function getSelectedActivity(activity) {
      console.log('inside activities.controller. you clicked on this:', activity);
      console.log('This is the parent', $scope.$parent.test);
      $scope.$parent.selectedActivity = activity;
      $scope.$parent.console();
    }

  }
})();
