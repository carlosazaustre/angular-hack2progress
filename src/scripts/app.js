import angular from 'angular';
import 'angular-route';

import routeConfig from './app-routeconfig.js';
import employeeList from './components/employeeList';
import employeeItem from './components/employeeItem';
import employeeDetail from './components/employeeDetail';
import DataService from './services/dataservice';

angular
  .module('myApp', ['ngRoute'])
  .config(routeConfig)
  .directive('employeeList', employeeList)
  .directive('employeeItem', employeeItem)
  .directive('employeeDetail', employeeDetail)
  .service('DataService', DataService)

angular.element(document).ready(function () {
  angular.bootstrap(document, ['myApp']);
});
