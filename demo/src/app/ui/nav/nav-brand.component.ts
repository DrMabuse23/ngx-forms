import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-nav-brand',
  template: `
    <a class="animated fadeIn navbar-brand" routerLink="/">
      <img class="nav-logo" [src]="logo" /> {{ title }}
    </a>
  `,
  styles: [`
    .nav-logo {
      height: 60px;
    }
    .navbar-brand {
      font-size: 24px;
    }
  `],
})
export class NavBrandComponent  {
  @Input() logo = 'assets/img/ngx-plus-light.svg'
  @Input() title = 'ngx-forms'

}
