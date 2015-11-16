export default class DataService {

  constructor ($http) {
    this.$http = $http;
  }

  getAll () {
    return this.$http.get('https://empleados-api.herokuapp.com/empleados')
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  }

  getEmployee (id) {
    return this.$http.get(`https://empleados-api.herokuapp.com/empleados/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  }

}
