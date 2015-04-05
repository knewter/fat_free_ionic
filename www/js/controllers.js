angular.module('starter.controllers', [])

.controller('ContactsCtrl', ['$scope', 'Contacts', function($scope, Contacts) {
  Contacts.all().then(function(contacts){
    $scope.contacts = contacts;
  });
}])

.controller('ContactDetailCtrl', ['$scope', '$stateParams', 'Contacts', 'Comments', function($scope, $stateParams, Contacts, Comments) {
  Contacts.get($stateParams.contactId).then(function(contact){
    $scope.contact = contact;
  });
  Comments.all('contact_id', $stateParams.contactId).then(function(comments){
    console.log('contact comments!');
    console.log(angular.toJson(comments));
    $scope.comments = comments;
  });
}])

.controller('LeadsCtrl', ['$scope', 'Leads', function($scope, Leads) {
  Leads.all().then(function(leads){
    $scope.leads = leads;
  });
}])

.controller('LeadDetailCtrl', ['$scope', '$stateParams', 'Leads', 'Comments', function($scope, $stateParams, Leads, Comments) {
  Leads.get($stateParams.leadId).then(function(lead){
    $scope.lead = lead;
  });
  Comments.all('lead_id', $stateParams.leadId).then(function(comments){
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
