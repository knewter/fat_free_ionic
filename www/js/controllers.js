angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', 'MockContacts', function($scope, Contacts) {
  Contacts.all().then(function(contacts){
    $scope.contacts = contacts;
  });
}])

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
