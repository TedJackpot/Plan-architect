# MON ARCHITECT
Application de conception résidentielle pédagogique, créée de zéro selon le cahier des charges de Ted.

**État : phase 0, à valider.** Maquette interactive ; aucune génération de plans personnalisés, 3D réelle, connexion client ou IA active.

## Voir la maquette localement
Python 3 suffit, sans dépendance :
```sh
python3 -m http.server 8000 --directory dist
```
Ouvrir http://localhost:8000. Les réponses restent dans le stockage local de ce navigateur. Ne pas y placer de données sensibles. Le brief JSON peut être téléchargé à la dernière étape. Les illustrations sont fixes, sans échelle.

## Dossiers
- `dist/` : maquette autonome HTML/CSS/JS, trois directions graphiques et parcours de brief.
- `docs/CAHIER-DES-CHARGES-ORIGINAL.txt` : demande complète, conservée intégralement.
- `docs/PHASE-0-CONCEPTION.md` : architecture cible React/FastAPI/PostgreSQL/Three.js, périmètre, écrans, modèle de données et plan de livraison.
- `data/catalogue-initial.json` : registre initial à documenter et faire relire, sans données climatiques/prix inventés.
- `docs/RECETTE.md` : preuves attendues, notamment 50 terrains pour le moteur futur.
- `docs/RAPPORT-PHASE-0.md` : vérifications et limites observées.

La phase 1 commence seulement après validation de la phase 0. Aucun abonnement ou paiement n’est activé.

Document indicatif. Les plans, la structure (fondations, poteaux, poutres, charpente) et le respect des règles d'urbanisme et de construction doivent être validés par un architecte ou un ingénieur agréé avant tout permis ou chantier.
