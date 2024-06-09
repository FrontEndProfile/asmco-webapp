import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurAboutComponent } from './components/home/our-about/our-about.component';
import { OurHeroComponent } from './components/home/our-hero/our-hero.component';
import { OurProductsComponent } from './components/home/our-products/our-products.component';
import { OurTestimonialComponent } from './components/home/our-testimonial/our-testimonial.component';
import { OurNewsletterComponent } from './components/home/our-newsletter/our-newsletter.component';
import { MiniHeroComponent } from './components/mini-hero/mini-hero.component';
import { DefaultFaqsComponent } from './components/faqs/default-faqs/default-faqs.component';
import { FluidFaqsComponent } from './components/faqs/fluid-faqs/fluid-faqs.component';
import { FaqsSimpleComponent } from './components/faqs/faqs-simple/faqs-simple.component';
import { AnnouncementBarComponent } from './components/announcement-bar/announcement-bar.component';
import { OurGrowthDataComponent } from './components/home/our-growth-data/our-growth-data.component';
import { OurGalleryComponent } from './components/home/our-gallery/our-gallery.component';
import { OurBlogsComponent } from './components/home/our-blogs/our-blogs.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';
import { HowWeWorkComponent } from './pages/how-we-work/how-we-work.component';
import { RequestQuoteComponent } from './pages/request-quote/request-quote.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OurAboutComponent,
    OurHeroComponent,
    OurProductsComponent,
    OurTestimonialComponent,
    OurNewsletterComponent,
    MiniHeroComponent,
    DefaultFaqsComponent,
    FluidFaqsComponent,
    FaqsSimpleComponent,
    AnnouncementBarComponent,
    OurGrowthDataComponent,
    OurGalleryComponent,
    OurBlogsComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailComponent,
    BlogsComponent,
    BlogDetailComponent,
    FaqsComponent,
    GalleryComponent,
    ContactComponent,
    SiteMapComponent,
    HowWeWorkComponent,
    RequestQuoteComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
