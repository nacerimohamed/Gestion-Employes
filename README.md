# 👥 Application de Gestion des Employés avec Redux

Application web développée avec **React** et **Redux Toolkit** permettant de gérer une liste d'employés (ajout, modification, suppression).

Les données sont chargées automatiquement depuis une API REST via une action asynchrone (Thunk).

https://gestion-employes-tau.vercel.app/
---

## 🚀 Fonctionnalités

✅ Ajouter un nouvel employé (numéro, nom, prénom, date de naissance, adresse)  
✅ Afficher la liste des employés sous forme de cartes  
✅ Supprimer un employé  
✅ Modifier un employé via un formulaire modal  
✅ Chargement automatique des employés depuis une API  
✅ Interface moderne et responsive  

---

## 🛠️ Technologies utilisées

- React (Create React App ou Vite)
- Redux Toolkit
- React-Redux
- Axios
- CSS personnalisé

---

## 📋 Prérequis

- Node.js (v14 ou supérieure)
- npm ou yarn

---

## ⚙️ Installation

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/votre-compte/gestion-employes-redux.git
cd gestion-employes-redux
```

### 2️⃣ Installer les dépendances

```bash
npm install
```

ou

```bash
yarn install
```

### 3️⃣ Lancer l'application

```bash
npm start
```

ou

```bash
yarn start
```

L'application sera accessible sur :

```
http://localhost:3000
```

---

## 🌐 API utilisée

L'API utilisée est :

```
https://serverApi/employes
```

⚠️ Pensez à modifier l’URL dans le fichier :

```
src/store/employeesSlice.js
```

si nécessaire.

---

## 📂 Structure du projet

```
src/
│
├── components/
│   ├── AddEmployee.js
│   ├── ListEmployee.js
│   └── UpdateEmployee.js
│
├── store/
│   ├── index.js
│   └── employeesSlice.js
│
├── App.js
├── index.js
└── index.css
```

---

## 📸 Captures d'écran

Ajoutez ici vos images :

```markdown
![Aperçu](./assets/screenshot.png)
```

---

## 👨‍🏫 Auteur

Formateur : A. BENDAOUD  

Projet réalisé dans le cadre d'une formation sur Redux.

---

## 📄 Licence

Ce projet est libre d'utilisation à des fins pédagogiques.
