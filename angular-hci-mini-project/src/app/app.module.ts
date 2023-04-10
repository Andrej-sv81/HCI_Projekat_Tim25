import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule}  from '@angular/material/icon'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailsComponent } from './details/details.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
