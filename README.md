# Portfolio - Ryan Amory

Site statique (HTML/CSS/JS, sans dépendance ni build) prévu pour **GitHub Pages**.

## Structure

```
index.html                  Page unique : profil, expertise, projets, parcours, contact
projets/
  sae401.html …             Une page détaillée par projet
  _modele-projet.html       Modèle à dupliquer pour un nouveau projet
assets/
  css/style.css             Feuille de style unique (toutes les pages)
  js/main.js                Filtres des projets + sommaire actif
  img/projets/              Images des projets (format .webp)
  CV_Amory_Ryan.pdf         CV téléchargeable
.nojekyll                   Indique à GitHub Pages de servir les fichiers tels quels
```

## Mise en ligne sur GitHub Pages

1. Créez un dépôt nommé `AnonymousApexio.github.io` (le site sera à `https://anonymousapexio.github.io/`),
   ou utilisez n'importe quel dépôt (le site sera à `https://anonymousapexio.github.io/nom-du-depot/`).
2. Copiez **le contenu** de ce dossier à la racine du dépôt, puis poussez :
   ```bash
   git add . && git commit -m "Nouveau portfolio" && git push
   ```
3. Sur GitHub : **Settings --> Pages --> Build and deployment --> Source : Deploy from a branch**,
   branche `main`, dossier `/ (root)`. Le site est en ligne après une ou deux minutes.

Tous les liens sont relatifs : le site fonctionne dans les deux cas.

## Ajouter un projet

1. **Page détaillée** : dupliquez `projets/_modele-projet.html` (ex. `projets/sae501.html`),
   remplacez les textes entre `[crochets]`, supprimez les sections inutiles et mettez à jour
   le sommaire (`<nav class="toc">`). Les commentaires dans le fichier guident chaque section.
2. **Images** : déposez-les dans `assets/img/projets/` (idéalement en `.webp`, largeur ≤ 1800 px).
3. **Carte sur l'accueil** : dans `index.html`, section `#projets`, copiez le modèle de carte
   en commentaire et collez-le en haut de la grille `<div class="projects">`.
   L'attribut `data-domain` (`cyber`, `reseau`, `dev`, `iot`) alimente les filtres ;
   les compteurs se mettent à jour tout seuls.
4. Pensez à mettre à jour le chiffre « N projets » dans le bandeau du haut de `index.html`.

Pour un projet terminé, retirez `<span class="badge-live">EN COURS</span>` de sa carte
et mettez à jour le champ « Statut » de sa page.

## Mettre à jour le CV

Remplacez `assets/CV_Amory_Ryan.pdf` par la nouvelle version en gardant le même nom.
