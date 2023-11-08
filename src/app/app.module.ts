import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { EstilosFotografiaComponent } from './estilos-fotografia/estilos-fotografia.component';

import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';
import { VideosDiegoComponent } from './videos-diego/videos-diego.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    SobreMiComponent,
    EstilosFotografiaComponent,
    FormularioComponent,
    FooterComponent,
    VideosDiegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
