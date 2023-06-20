import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from '../public/public.component';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';



@NgModule({
  declarations: [
    PublicComponent,
    NavbarComponent,
    MainContentComponent,
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  
  ],
  exports :[
    PublicComponent
  ]
})
export class PublicModule { }
