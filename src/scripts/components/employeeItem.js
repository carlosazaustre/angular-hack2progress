export default function employeeItem () {
  return {
    scope: {
      data: "="
    },
    template: `
      <li class="collection-item avatar">
        <img class="circle" ng-src="{{ data.pic }}"/>
        <span class="title">
          <a ng-href="#/employee/{{ data.id }}">{{ data.fullName }}</a>
        </span>
        <p>
          {{ data.title }}<br/>
          <span class="badge">{{ data.department }}</span>
        </p>
      </li>
    `
  }
}
