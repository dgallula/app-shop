import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez cette ligne
import { MatFormFieldModule } from '@angular/material/form-field'; // Importez MatFormFieldModule
import { MatIconModule } from '@angular/material/icon'; // Importez MatIconModule
import { MatButtonModule } from '@angular/material/button'; // Importez MatButtonModule
import { MatInputModule } from '@angular/material/input'; // Importez MatInputModule
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


