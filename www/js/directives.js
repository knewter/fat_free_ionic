angular.module('starter.directives', [])

.directive('taskList', [function() {
  function link(scope, element, attrs){
    console.log('foo');
    console.log(scope.tasks);
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
