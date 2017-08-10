import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { MdButtonModule } from '@angular/material'
import { NgxFormsModule } from '@ngx-plus/ngx-forms'

import { SharedModule } from './shared/shared.module'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { InstallationComponent } from './installation/installation.component'
import { SetupComponent } from './setup/setup.component'
import { UsageComponent } from './usage/usage.component'

import { FooterComponent } from './footer/footer.component'
import { NotesComponent } from './notes/notes.component'

import { FieldsComponent } from './fields/fields.component'
import { AppRoutingModule } from './app-routing.module';
import { DemoComponent } from './demo/demo.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormsModule.forRoot(),
    HttpModule,
    SharedModule,
    MdButtonModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    InstallationComponent,
    SetupComponent,
    UsageComponent,
    FieldsComponent,
    FooterComponent,
    NotesComponent,
    DemoComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
