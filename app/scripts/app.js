angular
  .module('myApp', ['ngRoute'])
  .config(appConfig)
  .service('EmpleadoService', EmpleadoService)
  .directive('empleadoList', empleadoList)
  .directive('empleadoItem', empleadoItem)
  .directive('empleadoData', empleadoData)
  .value('API_URL', 'https://empleados-api.herokuapp.com');

function appConfig ($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<empleado-list></empleado-list>'
    })
    .when('/empleado/:id', {
      template: '<empleado-data></empleado-data>'
    })
    .otherwise({
      redirectTo: '/'
    });
}

function empleadoList (EmpleadoService) {
  return {
    scope: {},

    controller: function () {
      this.empleados = [];

      EmpleadoService.getAll()
        .then(function(data) {
          this.empleados = data;
        }.bind(this));
    },

    controllerAs: 'vm',

    template: [
      '<div ng-repeat="empleado in vm.empleados">',
        '<empleado-item data="empleado">',
        '</empleado-item>',
      '</div>'
    ].join('')
  }

}

function empleadoItem () {
  return {
    scope: {
      data: "="
    },

    template: [
      '<div>',
        '<strong>{{ data.fullName }}</strong><br/>',
        '<img width="64" ng-src="{{ data.pic }}"><br/>',
        '<span>{{ data.title }}</span> - {{ data.department }} ',
        '<a ng-href="#/empleado/{{ data.id }}">Más Info</a>',
      '</div>',
      '<hr/>'
    ].join('')
  }
}

function empleadoData () {
  return {
    scope: {},

    controller: function (EmpleadoService, $routeParams) {
      //var that = this;
      this.empleado = {};

      EmpleadoService.getEmpleado($routeParams.id)
        .then(function(data) {
          this.empleado = data;
        }.bind(this));
    },
    controllerAs: 'vm',

    template: [
      '<h2>{{ vm.empleado.fullName }}</h2>',
      '<img ng-src="{{ vm.empleado.pic }}" width="150" alt="">',
      '<ul>',
        '<li>Puesto: {{ vm.empleado.title }}</li>',
        '<li>Departamento: {{ vm.empleado.department }}</li>',
        '<li>Teléfono: {{ vm.empleado.cellPhone }}</li>',
        '<li>Email: <a ng-href="mailto:{{ vm.empleado.email }}">{{ vm.empleado.email }}</a></li>',
        '<li><strong>{{ vm.empleado.twitterId }}</strong></li>',
      '</ul>'
    ].join(''),

  }
}

function EmpleadoService ($http, API_URL) {
  return {
    getAll: getAll,
    getEmpleado: getEmpleado
  };

  function getAll() {
    return $http.get(API_URL + '/empleados')
      .then(getEmpleadosComplete)
      .catch(getEmpleadosFailed);

    function getEmpleadosComplete (response) {
      return response.data;
    }

    function getEmpleadosFailed (error) {
      console.log('Error Ajax Call for getEmpleados: ' + error.data);
    }
  }

  function getEmpleado(id) {
    return $http.get(API_URL + '/empleados/' + id)
      .then(getEmpleadoComplete)
      .catch(getEmpleadoFailed);

    function getEmpleadoComplete (response) {
      return response.data;
    }

    function getEmpleadoFailed (error) {
      console.log('Error Ajax Call for getEmpleado('+ id +')');
    }

  }
}
