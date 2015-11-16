angular
  .module('myApp')
  .service('DataService', DataService);

function DataService ($http, API_URL) {
  return {
    getAll     : getAll,
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
