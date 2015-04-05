angular.module('starter.directives', [])

.directive('taskList', [function() {
  function link(scope, element, attrs){
  }

  return {
    restrict: 'E',
    scope: {
      tasks: '=tasks',
      bucket: '@bucket'
    },
    templateUrl: '/templates/directives/task-list.html',
    link: link
  }
}]);
