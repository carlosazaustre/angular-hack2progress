angular
  .module('myApp')
  .config(routeConfig);

function routeConfig ($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<empleado-list></empleado-list>'
    })
    .when('/empleado/:id', {
      template: '<empleado-detail></empleado-detail>'
    })
    .otherwise({
      redirectTo: '/'
    });
}
