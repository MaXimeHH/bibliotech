import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: User | null = null;

  constructor() {}

  // Vérifier si un utilisateur est connecté
  isUserAuthenticated(): boolean {
    return !!this.currentUser;
  }

  // Authentifier un utilisateur
  login(email: string, password: string): void {
    // Remplacer cette logique par une authentification avec une API RESTful qui renvoie un jeton d'authentification valide
    fetch('http://mon-api.com/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(data => {
        const user = new User(data.id, data.email, data.password, data.role);
        // Stocker localement le jeton d'authentification reçu
        this.currentUser = user;
      })
      .catch(error => console.error(error));
  }

  // Déconnecter un utilisateur
  logout(): void {
    this.currentUser = null;
  }

  // Récupérer les informations de l'utilisateur actuellement connecté
  getCurrentUser(): User | null {
    return this.currentUser;
  }

}
