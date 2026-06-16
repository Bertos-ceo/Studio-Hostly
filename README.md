# Studio Hostly — site web

Site vitrine de Studio Hostly : sites d'événement sur-mesure.
HTML/CSS/JS statique, aucune dépendance à installer.

## Structure

```
index.html          Accueil
tarifs.html         Tarifs
airbnb.html         Airbnb & locations (livret d'accueil)
realisations.html   Réalisations (exemple Maurice)
a-propos.html       À propos
contact.html        Demander un devis
brand-kit.html      Kit de marque (usage interne, non lié au menu)
assets/
  style.css         Styles partagés
  app.js            Menu mobile + animations
  logo.svg          Logo
  bertrand.jpg      Photo
```

## Mettre en ligne avec GitHub Pages

1. Créer un dépôt **public** (ex. `studio-hostly`).
2. **Add file → Upload files**, puis glisser TOUT le contenu de ce dossier
   (les fichiers `.html` ET le dossier `assets`). Les `.html` doivent rester
   à la racine du dépôt, pas dans un sous-dossier.
3. **Commit changes**.
4. **Settings → Pages → Source : Deploy from a branch**, branche `main`,
   dossier `/ (root)`, puis **Save**.
5. Au bout d'~1 min, l'adresse s'affiche : `https://<pseudo>.github.io/studio-hostly/`

### Vérifier
Ouvrir `https://<pseudo>.github.io/studio-hostly/assets/style.css` :
si le CSS s'affiche, tout est bien placé. Sinon, le dossier `assets`
n'est pas à la racine — le ré-uploader.

## À personnaliser avant diffusion

- `contact.html` : remplacer `contact@exemple.com` et le téléphone
  (« à compléter »), y compris dans le petit script en bas de page.
- Vérifier les mentions de parcours (hôtellerie, « 10 ans ») dans
  `index.html` et `a-propos.html`.

## Mettre à jour plus tard
Remplacer les fichiers dans le dépôt → GitHub Pages republie tout seul.
