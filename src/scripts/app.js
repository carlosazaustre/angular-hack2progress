import angular from 'angular';
import employeeList from './components/employeeList';
import employeeItem from './components/employeeItem';
import DataService from './dataservice';

angular
  .module('myApp', [])
  .directive('employeeList', employeeList)
  .directive('employeeItem', employeeItem)
  .service('DataService', DataService)

angular.element(document).ready(function () {
  angular.bootstrap(document, ['myApp']);
});
