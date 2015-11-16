export default function routeConfig ($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<employee-list></employee-list>'
    })
    .when('/employee/:employeeId', {
      template: '<employee-detail></employee-detail>'
    })
    .otherwise({
      redirectTo: '/'
    });
}
