class EmployeeDetailController {
  constructor (DataService, $routeParams) {
    this.DataService = DataService;
    this.employee = {};
    this.getEmployeeData($routeParams.employeeId);
  }

  getEmployeeData (id) {
    this.DataService.getEmployee(id)
      .then((data) => {
        this.employee = data;
        console.log(data);
      });
  }
}

export default function employeeDetail () {
  return {
    scope: {},
    bindToController: true,
    controller: EmployeeDetailController,
    controllerAs: 'vm',
    template: `
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-action">
              <h4><a href="/#/">{{ vm.employee.fullName }}</a></h4>
            </div>
            <div class="card-image">
              <img ng-src="{{ vm.employee.pic }}">
            </div>
            <div class="card-content">
              <ul class="collection">
                <li class="collection-item">{{ vm.employee.cellPhone }}</li>
                <li class="collection-item">{{ vm.employee.email }}</li>
                <li class="collection-item">{{ vm.employee.twitterId }}</li>
                <li class="collection-item">{{ vm.employee.city }}</li>
              </ul>
            </div>
            <div class="card-action">
              <a href="/#/">Volver</a>
            </div>
          </div>
        </div>
      </div>
    `
  };
}
