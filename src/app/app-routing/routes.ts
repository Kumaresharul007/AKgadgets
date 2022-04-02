import { Routes } from "@angular/router";
import { CalculatorComponent } from "../calculator/calculator.component";
import { GadgetsComponent } from "../gadgets/gadgets.component";
import { HomeComponent } from "../home/home.component";
import { MobilesComponent } from "../mobiles/mobiles.component";
import { HeadphonesComponent } from "../headphones/headphones.component";
import { GadgetdetailsComponent } from "../gadgetdetails/gadgetdetails.component";
import { MobiledetailsComponent } from "../mobiledetails/mobiledetails.component";
import { AboutusComponent } from "../aboutus/aboutus.component";
import { ContactusComponent } from "../contactus/contactus.component";
import { HeadphonedetailsComponent } from "../headphonedetails/headphonedetails.component";
import { CalculatordetailsComponent } from "../calculatordetails/calculatordetails.component";
import { CartComponent } from "../cart/cart.component";

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "laptops",
        component: GadgetsComponent
    },
    {
        path: "mobiles",
        component: MobilesComponent
    },
    {
        path: "calculators",
        component: CalculatorComponent
    },
    {
        path: "headphones",
        component: HeadphonesComponent
    },
    {
        path: "gadgetdetail/:id",
        component: GadgetdetailsComponent
    },
    {
        path: "mobiledetails/:id",
        component: MobiledetailsComponent
    },
    {
        path: "headphonedetails/:id",
        component: HeadphonedetailsComponent
    },
    {
        path: "calculatordetails/:id",
        component: CalculatordetailsComponent
    },
    {
        path: "aboutus",
        component: AboutusComponent
    },
    {
        path: "contactus",
        component: ContactusComponent
    },
    {
        path: "gotocart",
        component: CartComponent
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    }

];