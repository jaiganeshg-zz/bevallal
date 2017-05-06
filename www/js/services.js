angular.module('starter.services', [])

.service('LoginService', function($q) {
    return {
        loginUser: function($http, mobilenumber) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            var str="http://192.168.16.199:4000/api/verifyValidNumber?phone="+mobilenumber;
			$http.get(str)
			      .success(function (response){
              if(response) {
                deferred.resolve('Welcome ' + response.name + '!');
              }
              else {
                deferred.reject('Wrong credentials.');
              }

            });
 
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})


.service('SignupService', function($q) {
    return {
        SingupUser: function($http, data) {
          console.log(data);
          var deferred = $q.defer();
            var promise = deferred.promise;

            var str="http://192.168.16.199:4000/api/createOrphanage";
		    	$http.post(str, data).success(function (response){
            //$scope.response = res.data;
            response = null;
              if(response) {
                console.log(response);
                deferred.resolve('Welcome ' + response.name + '!');
              }
              else {
                deferred.reject('Please try again.');
              }

            });
 
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})


.service('ChatLog', function($q) {
    return {
        getAvailableSurplusFood: function($http) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            var str="http://192.168.16.199:4000/api/getAvailableSurplusFood";
			$http.get(str)
			      .success(function (response){
              if(response) {
                console.log("response getAvailableSurplusFood");
                console.log(response);
                deferred.resolve(response);
              }
              else {
                deferred.reject('No data.');
              }

            });
 
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },

        getSponsorDetails: function($http, mobilenumber) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            var str="http://192.168.16.199:4000/api/getPartyHall?phone="+mobilenumber;
			$http.get(str)
			      .success(function (response){
              if(response) {
                console.log("response getAvailableSurplusFood");
                console.log(response);
                deferred.resolve(response);
              }
              else {
                console.log(str);
                console.log(response);
                deferred.reject('No data.');
              }

            });
 
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
        getFood: function($http, data) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            console.log("getFooooooooooooooooo");
            console.log(data);

            var str="http://192.168.16.199:4000/api/acceptAvailableSurplusFood";
            $http.put(str, data).success(function (response){
              console.log("acceptAvailableSurplusFood");
              console.log(response);
              if(response) {
                deferred.resolve('Welcome ' + response.name + '!');
              }
              else {
                deferred.reject('Wrong credentials.');
              }

            });
 
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
    }
})


.service('DonateService', function($q) {
    return {
        DonateFood: function($http, data) {

          console.log("Data received in service");
          console.log(data);
            var deferred = $q.defer();
            var promise = deferred.promise;

            var str="http://192.168.16.199:4000/api/createSurplusFood";
			$http.post(str, data).success(function (response){
              console.log("createSurplusFood");
              console.log(response);
              if(response) {
                deferred.resolve('Welcome ' + response.name + '!');
              }
              else {
                deferred.reject('Wrong credentials.');
              }

            });
 
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.factory('Chats', function($q) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function($http) {

      var deferred = $q.defer();
      var promise = deferred.promise;

      var str="http://192.168.16.199:4000/api/getAvailableSurplusFood";
			$http.get(str)
			      .success(function (response){
              if(response) {
                console.log("response getAvailableSurplusFood");
                console.log(response);
                //deferred.resolve(response);
                chats = response;
                deferred.resolve(chats);
              }
              else {
                deferred.reject('No data.');
              }

            });

            console.log("Printing promise");
            console.log(promise);
      return promise;
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


