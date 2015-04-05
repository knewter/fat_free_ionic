angular.module('starter.controllers', [])

.controller('ContactsCtrl', ['$scope', 'Contacts', function($scope, Contacts) {
  Contacts.all().then(function(contacts){
    $scope.contacts = contacts;
  });
}])

.controller('ContactDetailCtrl', ['$scope', '$stateParams', 'Contacts', 'MockComments', function($scope, $stateParams, Contacts, Comments) {
  Contacts.get($stateParams.contactId).then(function(contact){
    $scope.contact = contact;
  });
  Comments.get($stateParams.contactId).then(function(comments){
    $scope.comments = comments;
  });
}])

.controller('TasksCtrl', ['$scope', 'Tasks', function($scope, Tasks) {
  Tasks.all().then(function(tasks){
    $scope.tasks = tasks;
  });
}])

.controller('TaskDetailCtrl', ['$scope', '$stateParams', 'Tasks', function($scope, $stateParams, Tasks) {
  Tasks.get($stateParams.taskId).then(function(task){
    $scope.task = task;
  });
}])

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
