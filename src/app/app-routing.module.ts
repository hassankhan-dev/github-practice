import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
// Admin Route

// End of Admin Route

// Private Seller Route

// End of Private Seller Route

// Agent Route

// Private Agent Route

const routes: Routes=[
  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"ContactUS",component:ContactUSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
