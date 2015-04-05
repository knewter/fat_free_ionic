var FFCRM_URL = 'http://192.168.1.23:3000';
var credentials = "VN4CzzwwmeYs9OVcJTBy"; // This is the single_access_token for your user in FFCRM


angular.module('starter.services', [])

.factory('Contacts', ['$http', '$q', function($http, $q) {
  return {
    all: function() {
      var deferred = $q.defer();

      $http.get(FFCRM_URL + '/contacts.json', { params: { user_credentials: credentials } })
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          deferred.reject();
        });

        return deferred.promise;
    }
  }
}])


.factory('MockContacts', ['$q', function($q) {
  var contacts = [
    {
      "contact":
        {
          "id":1,
          "user_id":1,
          "lead_id":null,
          "assigned_to":null,
          "reports_to":null,
          "first_name":"Josh",
          "last_name":"Adams",
          "access":"Public",
          "title":"",
          "department":"",
          "source":null,
          "email":"josh@isotope11.com",
          "alt_email":"",
          "phone":"2052153957",
          "mobile":"",
          "fax":"",
          "blog":"",
          "linkedin":"",
          "facebook":"",
          "twitter":"",
          "born_on":null,
          "do_not_call":false,
          "deleted_at":null,
          "created_at":"2015-04-04T19:49:10.084Z",
          "updated_at":"2015-04-04T19:49:10.084Z",
          "background_info":null,
          "skype":"",
          "subscribed_users":[]
        }
    }
  ];

  return {
    all: function() {
      var deferred = $q.defer();
      deferred.resolve(contacts);
      return deferred.promise;
    }
  }
}])

.factory('Tasks', ['$http', '$q', function($http, $q) {
  return {
    all: function() {
      var deferred = $q.defer();

      $http.get(FFCRM_URL + '/tasks.json', { params: { user_credentials: credentials } })
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          deferred.reject();
        });

        return deferred.promise;
    },

    get: function(id) {
      var deferred = $q.defer();

      $http.get(FFCRM_URL + '/tasks/' + id + '.json', { params: { user_credentials: credentials } })
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          deferred.reject();
        });

        return deferred.promise;
    }
  }
}])


.factory('MockTasks', ['$q', function($q) {
  var tasks = {
    "overdue": [],
    "due_asap": [
      {
        "task": {
          "assigned_to": 1,
          "id": 1,
          "user_id": 1,
          "completed_by": null,
          "name": "Ping him and see if they need anything",
          "asset_id": null,
          "asset_type": "",
          "priority": null,
          "category": "email",
          "bucket": "due_asap",
          "due_at": null,
          "completed_at": null,
          "deleted_at": null,
          "created_at": "2015-04-04T18:07:59.342-05:00",
          "updated_at": "2015-04-04T18:07:59.342-05:00",
          "background_info": null,
          "subscribed_users": []
        }
      }
    ],
    "due_today": [],
    "due_tomorrow": [],
    "due_this_week": [],
    "due_next_week": [],
    "due_later": []
  };

  return {
    all: function() {
      var deferred = $q.defer();
      deferred.resolve(tasks);
      return deferred.promise;
    },

    get: function(id) {
      var deferred = $q.defer();
      deferred.resolve(tasks.due_asap[0]);
      return deferred.promise;
    }
  }
}])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
