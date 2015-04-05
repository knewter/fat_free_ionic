var FFCRM_URL = 'http://192.168.1.23:3000';
var credentials = "oEawnQhYxKpZ6QiVSEH"; // This is the single_access_token for your user in FFCRM


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
    },

    get: function(id) {
      var deferred = $q.defer();

      $http.get(FFCRM_URL + '/contacts/' + id + '.json', { params: { user_credentials: credentials } })
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
    },

    get: function(id) {
      var deferred = $q.defer();
      deferred.resolve(contacts[0]);
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

.factory('MockComments', ['$q', function($q) {
  var comments = [
    {
      "comment": {
        "commentable_id": 1,
        "id": 1,
        "user_id": 1,
        "commentable_type": "Contact",
        "private": null,
        "title": "",
        "comment": "This guy is so lame..",
        "created_at": "2015-04-04T22:30:12.245-05:00",
        "updated_at": "2015-04-04T22:30:12.245-05:00",
        "state": "Expanded"
      }
    }
  ];

  return {
    all: function() {
      var deferred = $q.defer();
      deferred.resolve(comments);
      return deferred.promise;
    },

    get: function(id) {
      var deferred = $q.defer();
      deferred.resolve(comments[0]);
      return deferred.promise;
    }
  }
}])
;
