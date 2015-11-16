angular
  .module('myApp')
  .directive('empleadoList', empleadoList);

function empleadoList (DataService) {
  return {
    scope: {},

    controller: function () {
      this.empleados = [];

      DataService.getAll()
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
