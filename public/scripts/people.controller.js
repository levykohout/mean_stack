angular.module('meanApp')
       .controller('PeopleController', PeopleController);

function PeopleController($http) {
  console.log('PeopleController loaded');
  var controller = this;
  controller.people = [];

//function to retrieve data from the database using GET request
  controller.listPeople = function(){
    console.log('Listing people');
    $http.get('/people').then(function(response){
      console.log('response', response);
      controller.people = response.data;
      console.log(controller.people);
    }, function(error){
      console.log('error making request', error);
    });
  };

// function to add person to the data with a post request
  controller.addPerson = function() {

    var data = {name: controller.name,
                hometown:controller.hometown,
                movie:controller.favoriteMovie
        };
        console.log(data);

    $http.post('/people', data).then(function(response){
      console.log('response', response);
      controller.listPeople();
    });
  };
// function to sort the people array based on dropdown selection
      controller.orderByMe = function(selected) {
          console.log(selected);
        controller.myOrderBy = selected;
    };

}
