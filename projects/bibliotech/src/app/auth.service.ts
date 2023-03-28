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

  // Authentifier un utilisateur (simulation)
  login(email: string, password: string): void {
    // Remplacer cette logique par une authentification avec une API RESTful qui renvoie un jeton d'authentification valide
    const fakeApiResponse = {
      id: 1,
      email: 'utilisateur@test.com',
      password: 'motdepassesecret',
      role: 'admin'
    };
    const user = new User(fakeApiResponse.id, fakeApiResponse.email, fakeApiResponse.password, fakeApiResponse.role);
    // Stocker localement le jeton d'authentification reçu (simulation)
    this.currentUser = user;
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
