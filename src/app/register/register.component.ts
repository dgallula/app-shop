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
    if (this.customer.fullName && this.customer.preferredLanguage && this.customer.phoneNumber && this.customer.customerFace) {
      this.errorMessage = ''; // Supprimer le message d'erreur
      // Simulate a successful submission for demonstration purposes
      const isSuccessful = true; // Change this according to your actual submission logic

      if (isSuccessful) {
        this.successMessage = 'Le formulaire a été soumis avec succès !';
        this.isFormSubmitted = true;
        console.log('Formulaire soumis :', this.customer); // Afficher les données du formulaire dans la console
      } else {
        this.errorMessage = 'Une erreur s\'est produite lors de la soumission du formulaire.';
      }
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs du formulaire.';
    }
  }
}


   

