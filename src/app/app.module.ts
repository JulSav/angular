import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { MaterialComponent } from './material/material.component';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DatatableComponent } from './datatable/datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UvComponent } from './uv/uv.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { WeatherService } from './weather.service';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { locationReducer } from './location-reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactCreateComponent,
    ContactListComponent,
    HeaderComponent,
    FooterComponent,
    MaterialComponent,
    ReactiveFormComponent,
    DatatableComponent,
    UvComponent,
    CurrentWeatherComponent,
    ForecastComponent,
    HomePageComponent,
    TopBarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    StoreModule.forRoot({
      loc: locationReducer
    }),

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
