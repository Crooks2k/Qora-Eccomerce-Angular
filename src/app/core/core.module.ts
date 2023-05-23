import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './common/loader/loader.component';
import { AnimateComponent } from './common/animate/animate.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';



@NgModule({
  declarations: [
    LoaderComponent,
    AnimateComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
