angular
  .module('myApp')
  .directive('empleadoList', empleadoList);

function empleadoList (DataService) {
  return {
    scope: {},

    controller: function () {
      this.empleados = [];

      DataService.getAll()
        .then((data) => {
          this.empleados = data;
        });
    },

    controllerAs: 'vm',

    template: `
      <div ng-repeat="empleado in vm.empleados">
        <empleado-item data="empleado">
        </empleado-item>
      </div>'
    `
  }

}
