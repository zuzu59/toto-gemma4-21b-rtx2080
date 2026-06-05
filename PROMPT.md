Z-services
zf260605.1220


# Buts
J'aimerai faire une petite application pour smartphone PWA offline qui est déployée sur une github pages à chaque commit, qui me permet de gérer dans une db tous mes services informatiques que j'héberge chez moi dans mon cloud proxmox ! 


# Conditions de développement
* Je veux créer un projet de PWA avec Vite, Vue.js 3 et Dexie.js pour la base de données locale. Utilise le plugin @vite-pwa/plugin pour configurer automatiquement le Service Worker et le mode hors-ligne.

* Je veux que cela soit facile à utiliser depuis un smartphone mais aussi sur un browser desktop.

* Je veux qu'elle soit déployée dans une Github Pages lors de chaque commit



# Features

Comme champs du record de la db je veux

* Nom du service 
* IP du service 
* URL du service
* Description du service
* Tag de classification du service
* String1 de connexion SSH (user@ip)
* Info1 'text' qui dit quel type de password est utilisé pour se souvenir où chercher le password pour la connexion ssh
* String2 de connexion SSH (user@ip)
* Info2 'text' qui dit quel type de password est utilisé pour se souvenir où chercher le password pour la connexion ssh
* User1 de connexion HTML 
* Info1 'text' qui dit quel type de password est utilisé pour se souvenir où chercher le password pour la connexion HTML
* User2 de connexion HTML 
* Info2 'text' qui dit quel type de password est utilisé pour se souvenir où chercher le password pour la connexion HTML
Note du service
Date de création 
Date de modification 

Je veux pouvoir rechercher en full text dans tous les champs, c'est à dire mettre que des bouts de champs séparés par des espaces qui font office de 'and' booléen. Avec affichage en temps réel du résultat.

Je veux pouvoir créer, modifier, supprimer facilement tous les records.

Je veux pouvoir exporter ou importer toute la db en csv. 

Je veux pouvoir exporter ou importer en JSON la configuration de l'application.

Je veux avoir une sortie en mode liste avec choix des champs nom du service, IP, url, date modification et pouvoir filtrer et trier sur cette page.

Lors de la création modification d'un record, les tags de classification se présentent comme une liste à choix. Les tags sont sous forme de bulles avec une croix pour les effacer et un plus à droite pour en ajouter.
Je veux aussi un formulaire de gestion des tags.

Je veux que tout ce qui n'est pas important comme tags, export, import, about, help se trouvent dans un hamburger afin de simplifier l'utilisation sur un smartphone.

Je veux une gestion des versions de l'application avec les releases tag sur GitHub avec à chaque push commit une incrémentation de la version 0.0.0, 0.0.1, 0.0.2
La version doit être affichée au bas de chaque page de l'application.

Le commit, doit être atomic avec les préfixes new, change, fixe, refact, del détaillés de toutes les actions effectuées et après un changelog avec version + date et heure doit être tenu sur GitHub 

Dans le about il doit avoir et faire:
* Mon nom GitHub GitHub.com/zuzu59, quand on clique on va sur GitHub sur mon profil 
* Le nom du dépôt GitHub de l'application, quand on clique on va sur le dépôt github
* La version de l'application, quand on clique on affiche le changelog sur GitHub 
Quand on ouvre le about, cela doit vérifier sur GitHub s'il n'y a pas une nouvelle version par rapport à celle qui tourne et propose de voir le changelog sur GitHub 




.