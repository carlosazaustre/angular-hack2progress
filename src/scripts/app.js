import angular from 'angular';

angular
  .module('myApp', [])
  .controller('MiController', MiController);

function MiController () {
  this.mensaje = "Hola que tal?";
}

angular.element(document).ready(function () {
  angular.bootstrap(document, ['myApp']);
});
