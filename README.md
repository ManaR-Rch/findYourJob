# JobFinder

Application web de recherche d'emploi construite avec Angular 18.

## Description

JobFinder permet de rechercher des offres d'emploi via l'API Adzuna, de sauvegarder ses offres favorites et de suivre ses candidatures avec un système de statuts.

## Technologies

- Angular 18 (standalone components)
- Tailwind CSS
- NgRx (gestion d'état des favoris)
- JSON Server (fake API pour l'authentification)
- API Adzuna (offres d'emploi)

## Fonctionnalités

- Recherche d'emplois par mots clés et localisation
- Inscription et connexion utilisateur
- Sauvegarde des offres en favoris
- Suivi des candidatures avec statuts (en attente, accepté, refusé)
- Gestion du profil utilisateur
- Notifications toast
- Design responsive

## Installation

```bash
npm install
```

## Lancement

Démarrer le serveur JSON (fake API) :
```bash
npm run server
```

Démarrer l'application Angular :
```bash
ng serve
```

L'application est accessible sur `http://localhost:4200`.

## Compte de test

- Email : test@test.com
- Mot de passe : 123456
