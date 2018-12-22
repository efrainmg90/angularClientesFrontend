import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesComponent } from './clientes/clientes.component';
import { Routes, RouterModule } from "@angular/router";
import { DirectivaComponent } from './directiva/directiva.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form/form.component';
import { FormsModule } from "@angular/forms";


const routes:Routes=[
  {path: '', redirectTo:'/clientes',pathMatch:'full'},
  {path: 'directivas',component: DirectivaComponent},
  {path: 'clientes',component:ClientesComponent},
  {path: 'clientes/form',component:FormComponent},
  {path: 'clientes/form/:id',component:FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientesComponent,
    DirectivaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
