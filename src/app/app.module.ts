import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { EstilosFotografiaComponent } from './estilos-fotografia/estilos-fotografia.component';

import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PhotoSliderDiegoComponent } from './photo-slider-diego/photo-slider-diego.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    SobreMiComponent,
    EstilosFotografiaComponent,
    FormularioComponent,
    FooterComponent,
    PhotoSliderDiegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
