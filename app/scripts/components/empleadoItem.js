angular
  .module('myApp')
  .directive('empleadoItem', empleadoItem);

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
