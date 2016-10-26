angular.module('meanApp')
       .controller('PeopleController', PeopleController);

function PeopleController($http) {
  console.log('PeopleController loaded');
  var controller = this;
  controller.people = [];

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

  // controller.propertyName = 'name';
  //   controller.reverse = true;
  //
  //
  //   controller.sortBy = function(propertyName) {
  //     controller.reverse = (controller.propertyName === propertyName) ? !controller.reverse : false;
  //     controller.propertyName = propertyName;
  //   };




      controller.orderByMe = function(x) {
          console.log(x);
        controller.myOrderBy = x;
    };




}
