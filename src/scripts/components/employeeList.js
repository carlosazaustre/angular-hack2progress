class EmployeeListController {
  constructor(DataService) {
    this.DataService = DataService;
    this.employees = [];
    this.getEmployees();
  }

  getEmployees () {
    this.DataService.getAll()
      .then((data) => {
        this.employees = data;
      });
  }

}

export default function employeeList () {
  return {
    scope: {},
    bindToController: true,
    controller: EmployeeListController,
    controllerAs: 'vm',
    template: `
      <ul class="collection">
        <employee-item ng-repeat="employee in vm.employees" data="employee">
        </employee-item>
      </ul>
    `
  };
}
