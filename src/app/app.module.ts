import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MissionComponent } from './components/mission/mission.component';
import { AreasComponent } from './components/areas/areas.component';

import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { TargetComponent } from './components/target/target.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/dashboard/table/table.component';
import { FormComponent } from './components/form/form.component';
import { DetailPubblicoComponent } from './components/areas/detail-pubblico/detail-pubblico.component';
import { DetailSanitarioComponent } from './components/areas/detail-sanitario/detail-sanitario.component';
import { DetailSportivoComponent } from './components/areas/detail-sportivo/detail-sportivo.component';
import { DetailProduttivoComponent } from './components/areas/detail-produttivo/detail-produttivo.component';
import { DetailPrivatoComponent } from './components/areas/detail-privato/detail-privato.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MissionComponent,
    AreasComponent,
    MapComponent,
    HomeComponent,
    TargetComponent,
    ServicesComponent,
    LoginComponent,
    DashboardComponent,
    TableComponent,
    FormComponent,
    DetailPubblicoComponent,
    DetailSanitarioComponent,
    DetailSportivoComponent,
    DetailProduttivoComponent,
    DetailPrivatoComponent,
    StatsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFXLvCTe0u1YPAxwbtT3UpDTpA2-RYDT4'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ChartsModule,
    Routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
