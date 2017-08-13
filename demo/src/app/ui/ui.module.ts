import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { BadgesComponent } from './badges/badges.component'
import { RibbonComponent } from './ribbon/ribbon.component'
import { SanitizerPipe } from './sanitizer/sanitizer.pipe'
import { HighlightComponent } from './highlight/component/highlight.component'
import { HighlightDirective } from './highlight/directive/highlight.directive'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { NavComponent } from './nav/nav.component'
import { NavBrandComponent } from './nav/nav-brand.component'
import { NavCustomComponent } from './nav/nav-custom.component'
import { NavItemsComponent } from './nav/nav-items.component'
import { CardComponent } from './card/card.component'
import { LayoutComponent } from './layout/layout.component'

const ui = [
  FooterComponent,
  HeaderComponent,
  NavComponent,
  NavBrandComponent,
  NavCustomComponent,
  NavItemsComponent,
  BadgesComponent,
  RibbonComponent,
  HighlightComponent,
  SanitizerPipe,
  HighlightDirective,
  CardComponent,
  LayoutComponent,
]

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...ui],
  exports: [
    ...ui,
  ],
})
export class UiModule {}
