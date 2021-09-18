# Groupomania
Bienvenue sur Groupomania Social Network !   

Pour utiliser correctement l'API, veuillez suivre ces instructions :  

 - Clonez ce repository.   

 ## groupomania - Database  
 Avec MySQL Workbench:  
 1 - Se connecter à sa database  
 2 - Cliquer sur Server dans la barre de menu  
 3 - Selectionner Data Import  
 4 - Selectionner le dossier groupomaniaDb  
 5 - Selectionner les schemas Comments Posts et Users
 7 - Selectionner Start Import en bas à droite  
 
 (pour créer un utilisateur administrateur il faut le créer a partir de la bases de donnée avec comme valeur 1 à is_admin)

 ## groupomania - .env  
1 - Pour le frontend, ajouter dans le dossier /client un fichier .env et ajouter dedans: REACT_APP_API_URL=http://localhost:5000/ (si déploiement ne pas rendre cette donnée publique)  
2 - Ajouter à la racine du dossier le fichier .env fournit dans le livrable ou configurer le avec votre basse de donnée selon ce modèle:  
PORT=*port*  
DB_HOST=*host*  
DB_USER=*user*  
DB_PASS=*password*  
DB_DATABASE=*db*  
TOKEN_SECRET=*cleftokensecrete*  

 ## groupomania - Backend  
Depuis le dossier backend :  
Telechargez et ouvrez Node.js.   
Tapez la commande suivante : "npm start".   

Le serveur doit fonctionner sur "localhost" avec le port "5000".  

## Groupomania - Frontend  
Puis depuis le fichier frontend :  
Démarrer `npm start` pour avoir accès au serveur de développement.   
Rendez-vous sur `http://localhost:3000/`.   
L'application va se recharger automatiquement si vous modifiez un fichier source.  