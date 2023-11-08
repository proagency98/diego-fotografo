import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { EstilosFotografiaComponent } from './estilos-fotografia/estilos-fotografia.component';
import { VideosComponent } from './videos/videos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    SobreMiComponent,
    EstilosFotografiaComponent,
    VideosComponent,
    FormularioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
