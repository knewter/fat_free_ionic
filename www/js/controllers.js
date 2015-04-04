angular.module('starter.controllers', [])

.controller('ContactsCtrl', ['$scope', 'Contacts', function($scope, Contacts) {
  Contacts.all().then(function(contacts){
    $scope.contacts = contacts;
  });
}])

.controller('TasksCtrl', ['$scope', 'MockTasks', function($scope, Tasks) {
  Tasks.all().then(function(tasks){
    $scope.tasks = tasks;
  });
}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
