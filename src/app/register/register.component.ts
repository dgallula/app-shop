import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'] // Assurez-vous du chemin correct

})
export class RegisterComponent {
  customer = {
    fullName: '',
    preferredLanguage: 'fr',
    phoneNumber: '',
    customerFace: null
  };

  handleFileInput(event: any) {
    this.customer.customerFace = event.target.files[0];
  }

  submitForm() {
    console.log('Formulaire soumis :', this.customer);
    // Implémentez d'autres actions ici, comme l'envoi des données au backend.
  }
}
