import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Product-Detail', component: ProductDetailComponent },
  { path: 'Blogs', component: BlogsComponent },
  { path: 'Blog-Detail', component: BlogDetailComponent },
  { path: 'Faqs', component: FaqsComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Site Map', component: SiteMapComponent },
  { path: 'How-We-Work', component: HowWeWorkComponent },
  { path: 'Request-Quote', component: RequestQuoteComponent },
  { path: 'Privacy-Policy', component:  PrivacyPolicyComponent},
  { path: 'Terms-Conditions', component:  TermsConditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
