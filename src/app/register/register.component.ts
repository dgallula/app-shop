import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  customer = {
    fullName: '',
    preferredLanguage: 'fr',
    phoneNumber: '',
    customerFace: null
  };

  errorMessage: string = '';
  successMessage: string = '';
  isFormSubmitted: boolean = false;

  handleFileInput(event: any) {
    this.customer.customerFace = event.target.files[0];
  }

  onClickSubmit() {
    this.submitForm();
  }

  submitForm() {
    // Simulate a successful submission for demonstration purposes
    const isSuccessful = true; // Change this according to your actual submission logic

    if (isSuccessful) {
      this.successMessage = 'Le formulaire a été soumis avec succès !';
      this.isFormSubmitted = true;
      console.log('Formulaire soumis :', this.customer);
    } else {
      this.errorMessage = 'Une erreur s\'est produite lors de la soumission du formulaire.';
    }
  }
}

  


   

