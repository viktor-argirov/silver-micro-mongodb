
# Guide de Contribution

Merci de votre intérêt à contribuer à notre projet d'API de réservation de table pour restaurant ! Ce document fournit des directives pour vous aider à commencer et à participer efficacement au développement de ce projet.

## Objectif du Projet

L'objectif de ce projet est de développer une API RESTful pour gérer les réservations de table dans un restaurant. L'API permettra aux utilisateurs de s'inscrire, de se connecter, de réserver des tables, et aux administrateurs de gérer les tables et les réservations.

## Structure des Branches

### Branches Principales

- **main** : Branche principale contenant le code stable et prêt pour la production.
- **develop** : Branche d'intégration pour les nouvelles fonctionnalités et les corrections de bugs. Tous les développements doivent être fusionnés dans cette branche avant d'être intégrés dans `main`.

### Branches de Fonctionnalités

#### Objectif

Les branches de fonctionnalités permettent aux développeurs de travailler isolément sur une fonctionnalité ou une amélioration sans perturber la branche principale de développement (`develop`). Cela aide à garder le développement principal stable tout en expérimentant ou en ajoutant de nouvelles fonctionnalités.

#### Création

Une branche de fonctionnalité est généralement créée à partir de la branche `develop` pour s'assurer qu'elle contient les dernières mises à jour intégrées qui sont encore en phase de test.

#### Convention de Nomination

Les branches de fonctionnalités devraient avoir des noms descriptifs pour refléter clairement leur objectif. Elles sont souvent préfixées par `feature/`, suivies d'un identifiant qui décrit brièvement la fonctionnalité.

### Exemples de Branches de Fonctionnalités

Voici quelques exemples pour illustrer comment nommer vos branches de fonctionnalités en fonction des tâches ou des améliorations prévues :

1. **Ajout d'un système de réservation**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/add-reservation-system
   ```

   Cette branche pourrait inclure le développement d'un nouveau système pour gérer les réservations des clients dans l'application.

2. **Intégration d'un système de paiement**
   ```bash
   git checkout develop
   git checkout -b feature/integrate-payment-gateway
   ```

   Sur cette branche, un développeur pourrait travailler sur l'ajout d'une passerelle de paiement pour permettre aux utilisateurs de payer en ligne leurs réservations.

3. **Amélioration de la recherche de tables**
   ```bash
   git checkout develop
   git checkout -b feature/improve-table-search
   ```

   Ici, le focus pourrait être mis sur l'amélioration de l'algorithme de recherche pour que les clients puissent trouver des tables plus facilement.

4. **Ajout de notifications par email**
   ```bash
   git checkout develop
   git checkout -b feature/email-notifications
   ```

   Cette branche serait destinée à développer une fonctionnalité envoyant des notifications par email aux utilisateurs pour les confirmations de réservation ou les annulations.

5. **Optimisation de la performance de l'API**
   ```bash
   git checkout develop
   git checkout -b feature/optimize-api-performance
   ```

   Sur cette branche, des efforts pourraient être faits pour analyser et améliorer la performance de l'API existante, réduisant ainsi les temps de réponse pour les utilisateurs finaux.

#### Processus de Fusion

Une fois la fonctionnalité développée et testée localement, il est recommandé de :
- Pousser la branche sur le dépôt distant.
- Ouvrir une pull request pour fusionner la branche de fonctionnalité dans `develop`.
- S'assurer que tous les tests automatiques passent et que la branche est revue par d'autres développeurs avant de procéder à la fusion.

#### Avantages

L'utilisation de branches de fonctionnalités offre plusieurs avantages :
- **Isolation des changements** : Minimise les conflits en isolant les développements en cours des autres travaux.
- **Tests dédiés** : Permet des tests spécifiques et ciblés avant l'intégration dans la branche principale.
- **Révisions ciblées** : Facilite les revues de code en se concentrant uniquement sur les changements pertinents pour la fonctionnalité en question.


### Branches de Correctifs (Hotfixes)

Les branches de correctifs, ou "hotfixes", sont utilisées pour résoudre des problèmes critiques ou des bugs qui doivent être corrigés immédiatement en production. Elles sont dérivées directement de la branche de production (`main` ou `master`) et, une fois les corrections apportées, elles sont fusionnées à la fois dans la branche de production et dans la branche de développement (`develop`) pour assurer que les corrections soient répercutées dans les futures versions.

#### Objectif

Les branches de correctifs permettent de corriger rapidement les erreurs en production sans perturber les autres développements en cours dans la branche de développement.

#### Création

Les branches de correctifs sont créées à partir de la branche `main` (ou `master`).

#### Convention de Nomination

Les branches de correctifs devraient avoir des noms descriptifs, préfixés par `hotfix/`, suivis d'un identifiant court décrivant le correctif.

### Exemples de Branches de Correctifs

Voici quelques exemples pour illustrer comment nommer vos branches de correctifs en fonction des problèmes à résoudre :

1. **Correction d'un bug critique dans le système de réservation**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/fix-reservation-bug
   ```

   Cette branche pourrait être utilisée pour corriger un bug critique qui empêche les utilisateurs de faire des réservations.

2. **Correction d'une vulnérabilité de sécurité**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/security-vulnerability-fix
   ```

   Utilisez cette branche pour résoudre une vulnérabilité de sécurité récemment découverte et nécessitant une correction immédiate.

3. **Résolution d'un problème de performance majeur**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/performance-issue-fix
   ```

   Cette branche serait utilisée pour corriger un problème de performance qui impacte gravement l'expérience utilisateur.

### Processus de Fusion

Une fois le correctif développé et testé, suivez ces étapes pour fusionner la branche de correctif :

1. **Tester et Pousser les Modifications**
   Testez minutieusement votre correctif pour vous assurer qu'il résout bien le problème sans introduire de nouveaux bugs. Ensuite, poussez la branche sur le dépôt distant.

   ```bash
   git push -u origin hotfix/nom_du_hotfix
   ```

2. **Créer une Pull Request pour `main`**
   Ouvrez une pull request pour fusionner la branche de correctif dans `main`. Assurez-vous que tous les tests passent et que la pull request est revue par au moins un autre développeur.

3. **Fusionner dans `main`**
   Une fois approuvée, fusionnez la pull request dans `main` et déployez immédiatement la nouvelle version en production.

   ```bash
   git checkout main
   git merge hotfix/nom_du_hotfix
   git push origin main
   ```

4. **Fusionner dans `develop`**
   Pour éviter que le correctif ne soit perdu dans les futures versions, fusionnez également la branche de correctif dans `develop`.

   ```bash
   git checkout develop
   git pull origin develop
   git merge hotfix/nom_du_hotfix
   git push origin develop
   ```

### Avantages

L'utilisation de branches de correctifs offre plusieurs avantages :
- **Réponse Rapide** : Permet de résoudre rapidement les problèmes critiques en production.
- **Isolation des Correctifs** : Minimise les risques d'introduire des changements non testés en production.
- **Consistance** : Assure que les corrections critiques sont présentes dans toutes les futures versions du logiciel.

### Branches de Release

Les branches de release sont utilisées pour préparer une nouvelle version de l'application. Elles permettent de faire les derniers ajustements, de corriger les bugs mineurs, d'optimiser les performances, et de préparer la documentation avant de fusionner les changements dans la branche de production (`main`). Une fois finalisées, les branches de release sont fusionnées à la fois dans `main` et `develop` pour garantir que les modifications sont présentes dans toutes les futures versions.

#### Objectif

Les branches de release permettent de stabiliser une version avant de la mettre en production. Elles servent à effectuer les tests finaux et les ajustements nécessaires sans perturber le développement continu dans `develop`.

#### Création

Les branches de release sont créées à partir de la branche `develop` lorsque celle-ci est dans un état suffisamment stable pour préparer une nouvelle version.

#### Convention de Nomination

Les branches de release devraient être nommées avec le préfixe `release/`, suivi du numéro de version.

### Exemples de Branches de Release

Voici quelques exemples pour illustrer comment nommer vos branches de release :

1. **Préparer la version 1.0.0**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b release/v1.0.0
   ```

   Cette branche est utilisée pour préparer la version 1.0.0 de l'application.

2. **Préparer la version 2.1.0**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b release/v2.1.0
   ```

   Utilisez cette branche pour préparer la version 2.1.0, incluant de nouvelles fonctionnalités et corrections de bugs.

3. **Préparer une version corrective 1.2.1**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b release/v1.2.1
   ```

   Cette branche serait utilisée pour préparer une version corrective incluant des correctifs mineurs.

### Processus de Fusion

Une fois les ajustements et les tests finaux effectués, suivez ces étapes pour fusionner la branche de release :

1. **Tester et Pousser les Modifications**
   Testez minutieusement la version de release. Une fois prêt, poussez la branche sur le dépôt distant.

   ```bash
   git push -u origin release/vX.Y.Z
   ```

2. **Créer une Pull Request pour `main`**
   Ouvrez une pull request pour fusionner la branche de release dans `main`. Assurez-vous que tous les tests passent et que la pull request est revue par au moins un autre développeur.

3. **Fusionner dans `main` et Taguer la Version**
   Une fois approuvée, fusionnez la pull request dans `main` et taguez la nouvelle version pour la production.

   ```bash
   git checkout main
   git merge release/vX.Y.Z
   git tag -a vX.Y.Z -m "Release vX.Y.Z"
   git push origin main --tags
   ```

4. **Fusionner dans `develop`**
   Pour garantir que les modifications sont présentes dans les futures versions, fusionnez également la branche de release dans `develop`.

   ```bash
   git checkout develop
   git pull origin develop
   git merge release/vX.Y.Z
   git push origin develop
   ```

### Avantages

L'utilisation de branches de release offre plusieurs avantages :
- **Stabilisation** : Permet de stabiliser une version avant de la mettre en production, en incluant les derniers tests et ajustements nécessaires.
- **Isolation des Changements** : Permet de préparer une version sans perturber le développement continu dans `develop`.
- **Documentation et Préparation** : Offre le temps de préparer la documentation et les notes de version avant la sortie.

En suivant cette approche, vous pouvez garantir que chaque nouvelle version est bien préparée et stable avant d'être déployée en production, tout en maintenant la continuité et la qualité du développement.

### Mise à Jour du Fichier `CONTRIBUTING.md`

Voici comment mettre à jour votre fichier `CONTRIBUTING.md` pour inclure ces directives supplémentaires :

```markdown
# Guide de Contribution

Merci de votre intérêt à contribuer à notre projet d'API de réservation de table pour restaurant ! Ce document fournit des directives pour vous aider à commencer et à participer efficacement au développement de ce projet.

## Objectif du Projet

L'objectif de ce projet est de développer une API RESTful pour gérer les réservations de table dans un restaurant. L'API permettra aux utilisateurs de s'inscrire, de se connecter, de réserver des tables, et aux administrateurs de gérer les tables et les réservations.

## Structure des Branches

### Branches Principales

- **main** : Branche principale contenant le code stable et prêt pour la production.
- **develop** : Branche d'intégration pour les nouvelles fonctionnalités et les corrections de bugs. Tous les développements doivent être fusionnés dans cette branche avant d'être intégrés dans `main`.

### Branches de Fonctionnalités

- **feature/*** : Utilisée pour le développement de nouvelles fonctionnalités. Les branches de fonctionnalités doivent être basées sur `develop` et suivre le format `feature/nom_de_la_fonctionnalité`.

#### Exemples

1. **Ajout d'un système de réservation**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/add-reservation-system
   ```

2. **Intégration d'un système de paiement**
   ```bash
   git checkout develop
   git checkout -b feature/integrate-payment-gateway
   ```

3. **Amélioration de la recherche de tables**
   ```bash
   git checkout develop
   git checkout -b feature/improve-table-search
   ```

4. **Ajout de notifications par email**
   ```bash
   git checkout develop
   git checkout -b feature/email-notifications
   ```

5. **Optimisation de la performance de l'API**
   ```bash
   git checkout develop
   git checkout -b feature/optimize-api-performance
   ```

### Branches de Correctifs

- **hotfix/*** : Utilisée pour les corrections urgentes de bugs en production. Les branches de hotfix doivent être basées sur `main` et suivre le format `hotfix/nom_du_hotfix`.

#### Exemples

1. **Correction d'un bug critique dans le système de réservation**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/fix-reservation-bug
   ```

2. **Correction d'une vulnérabilité de sécurité**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/security-vulnerability-fix
   ```

3. **Résolution d'un problème de performance majeur**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/performance-issue-fix
   ```

### Branches de Release

- **release/*** : Utilisée pour préparer une nouvelle version. Les branches de release doivent être basées sur `develop` et suivre le format `release/vX.Y`.

#### Exemples

1. **Préparer la version 1.0.0**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b release/v1.0.0
   ```

2. **Préparer la version 2.1.0**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b release/v2.1.0
   ```

3. **Préparer une version corrective 1.2.1**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b release/v1.2.1
   ```


## Processus de Contribution

### 1. Cloner le Dépôt

Clonez le dépôt sur votre machine locale pour commencer le développement.

\`\`\`bash
git clone <URL-du-dépôt>
cd nom_du_projet
\`\`\`

### 2. Créer une Nouvelle Branche

Créez une nouvelle branche pour votre fonctionnalité ou correctif. Assurez-vous que votre branche est basée sur `develop` ou `main` selon le type de contribution.

\`\`\`bash
git checkout develop
git pull origin develop
git checkout -b feature/nom_de_la_fonctionnalité
\`\`\`

### 3. Développer et Tester

Développez votre fonctionnalité ou correctif et assurez-vous de tester votre code avant de le pousser. Utilisez les tests unitaires et fonctionnels pour vérifier le bon fonctionnement.

### 4. Commits

Utilisez des messages de commit clairs et descriptifs. Suivez le format suivant pour vos messages de commit :

\`\`\`plaintext
<type>(<scope>): <sujet>

<description>
\`\`\`

Exemple :
\`\`\`plaintext
feat(auth): ajout de la fonctionnalité de connexion

Ajout de l'endpoint /login pour permettre aux utilisateurs de se connecter.
\`\`\`

### 5. Pousser les Modifications

Poussez vos modifications sur votre branche distante :

\`\`\`bash
git push -u origin feature/nom_de_la_fonctionnalité
\`\`\`

### 6. Créer une Pull Request

Créez une pull request pour fusionner votre branche dans `develop` ou `main`. Décrivez clairement les modifications apportées et mentionnez les issues associées.

### 7. Revue de Code

Toutes les pull requests doivent être revues par au moins deux autres membres de l'équipe. Assurez-vous que les tests passent avant de fusionner la pull request.

## Normes de Codage

Respectez les normes de codage suivantes pour garantir un code propre et maintenable :

- **Indentation** : Utilisez des espaces pour l'indentation.
- **Nommage** : Utilisez des noms de variables et de fonctions clairs et descriptifs.
- **Commentaires** : Commentez votre code lorsque cela est nécessaire pour expliquer la logique complexe.

## Configuration des Environnements

Utilisez des fichiers de configuration distincts pour chaque environnement (`development`, `qa`, `production`). Chargez les variables d'environnement appropriées dans votre application.

Exemple de fichier `.env` :

\`\`\`plaintext
# .env.development
DB_HOST=localhost
DB_USER=devuser
DB_PASS=devpassword
\`\`\`

## Déploiement

Utilisez des pipelines CI/CD pour automatiser les tests et les déploiements. Configurez des règles de protection de branche pour `main` et `develop` pour assurer que les tests passent avant toute fusion.

## Documentation

Documentez vos fonctionnalités et modifications dans le `README.md` et d'autres fichiers de documentation appropriés. Assurez-vous que la documentation est claire et à jour.

## Support

Si vous avez des questions ou avez besoin d'aide, veuillez créer une issue ou contacter un membre de l'équipe de projet.

Merci de contribuer à notre projet et de nous aider à améliorer notre API de réservation de table pour restaurant !