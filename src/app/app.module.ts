import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { GadgetService } from './services/gadget.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ProductService } from './services/product.service';
import { MobilesComponent } from './mobiles/mobiles.component';
import { MobileService } from './services/mobile.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { CalculatorService } from './services/calculator.service';
import { HeadphonesService } from './services/headphones.service';
import { GadgetdetailsComponent } from './gadgetdetails/gadgetdetails.component';
import { MobiledetailsComponent } from './mobiledetails/mobiledetails.component';
import { HeadphonedetailsComponent } from './headphonedetails/headphonedetails.component';
import { CalculatordetailsComponent } from './calculatordetails/calculatordetails.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { baseURL } from './shared.ts/baseURL';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { FeedbackalertComponent } from './feedbackalert/feedbackalert.component';
import { CartComponent } from './cart/cart.component';
import { CartalertComponent } from './cartalert/cartalert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GadgetsComponent,
    HeaderComponent,
    FooterComponent,
    MobilesComponent,
    CalculatorComponent,
    HeadphonesComponent,
    GadgetdetailsComponent,
    MobiledetailsComponent,
    HeadphonedetailsComponent,
    CalculatordetailsComponent,
    AboutusComponent,
    ContactusComponent,
    FeedbackalertComponent,
    CartComponent,
    CartalertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    GadgetService,
    ProductService,
    MobileService,
    CalculatorService,
    HeadphonesService,

    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
