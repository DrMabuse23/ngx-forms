import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-nav',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <div class="row align-items-center w-100">
          <div>
            <ui-nav-brand></ui-nav-brand>
          </div>
          <div>
            <ui-nav-items [items]="items"></ui-nav-items>
          </div>
          <div>
            <ui-nav-custom></ui-nav-custom>
            <ribbon></ribbon>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: #f5f5f5;
      font-size: 18px;
      min-height: 80px;
    }
  `],
})
export class NavComponent {

  @Input() items: any[]

}
