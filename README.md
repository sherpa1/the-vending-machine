# The Vending Machine

Bonnes pratiques de Programmation Orientée Objet illustrée avec TypeScript.

## Sujet

Conception et implémentation d'un logiciel fictif de _"Distributeur automatique de boissons"_ sur la base d'un travail de rétro-ingénierie (analyse des interactions Homme / Machine, propositions d'amélioration...).

## Acteurs et interactions Homme / Machine

- Le système correspond au distributeur automatique de boisson (interface et automatismes).
- L'acteur primaire est le "Client" (sélection, configuration et commande de produit).
- L'acteur secondaire est le "Technicien de maintenance" (approvisionnement de la machine).

## Spécifications techniques

### Langage de programmation

Programmation Orienté Objet en langage TypeScript / JavaScript.

### Runtime JavaScript

Node.js v.14.17.6 (octobre 2021).

### Installation des dépendances NPM

_Les commandes ci-dessous doivent toutes être exécutées depuis la racine du répertoire du projet_

### Installation des dépendances NPM (avant la première utilisation)

`npm install`

### Installation globale de Nodemon pour le Hot Reloading (avant la première utilisation)

`npm install -g nodemon`

ou

`sudo npm install -g nodemon` (sur systèmes Unix)

### Exécution du logiciel

`npm start`

### Exécution du logiciel avec activation du Hot Reloading (nodemon doit être installé)

`npm run dev`

### Emplacement du code JavaScript transpilé

`./dist`

### Consultation du résultat produit par le logiciel

Pendant son exécution, le logiciel génére des logs directement affiché dans le terminal où il est en cours d'exécution.

#### Exemple de résultat attendu

```
- User : budget is 3.5€
- User : budget is 3€
- Vending machine : contains 11 beverage(s) in stock (added by maintenance technician Richard Roe)
- Vending Machine : contains 150 unities of sugar (added by maintenance technician Richard Roe)
- Vending Machine : contains 50 unities of cup (added by maintenance technician Richard Roe)
- Vending Machine : contains 150 unities of water (added by maintenance technician Richard Roe)
- Vending Machine : contains 100 unities of milk (added by maintenance technician Richard Roe)
- Vending Machine : espresso selected (name : espresso, water : 1, milk : 0, price : 1)
- Order : doing (name : espresso, price : 1, sugar : 0, salt : 0, with cup : false)
- Vending Machine : espresso ordered by John Doe
- Customer : payment done
- Order : done
- Vending Machine : cappuccino selected (name : cappuccino, water : 1, milk : 0, price : 2)
- Order : doing (name : cappuccino, price : 2, sugar : 0, salt : 0, with cup : false)
- Vending Machine : cappuccino ordered by Carla Coe
- Member Staff : payment done
- Order : done
```

### Exécution des tests unitaires avec Jest.js

`npm test`

---

**Alexandre Leroux**

- _Mail_ : alex@sherpa.one
- _Github_ : sherpa1
- _Twitter_ : @_sherpa_
- _Discord_ : sherpa#3890

_Enseignant vacataire à l'Université de Lorraine_

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital, Management & Cognition (Masters Sciences Cognitives)
