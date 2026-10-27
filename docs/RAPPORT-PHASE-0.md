> Document historique de phase 0. Pour l’état actuel après la demande de poursuivre sans pause, voir ETAT-LIVRAISON.md et EXPLOITATION.md.

# Rapport de phase 0 — 27 octobre 2026

## Réalisé
- Cahier des charges original conservé sans suppression.
- Architecture cible, modèle de données, contrats API, moteur déterministe et limites définis dans PHASE-0-CONCEPTION.md.
- Matrice couvrant les 13 sections du prompt et feuille des six phases.
- Maquette HTML/CSS/JS autonome ; trois thèmes, six étapes de brief, sauvegarde locale, résumé et téléchargement JSON.
- Dessins architecturaux SVG originaux, fixes et identifiés sans échelle ; aucune image présentée comme plan personnalisé.
- Catalogue initial structuré : familles climatiques, styles, matériaux, critères, sources à collecter et 16 étapes du guide. Ce registre est un brouillon de collecte, pas une base climatique ou technique validée.
- Plan de recette décrivant 50 cas de terrains pour le moteur futur.

## Vérifications effectivement réalisées
- `node --check dist/app.js` : succès.
- Navigation dans le navigateur de prévisualisation : les six écrans ont été ouverts ; suivant/précédent et navigation directe observés.
- Les trois commandes de thèmes ont été actionnées ; changements d’état de sélection observés. Capture visuelle de la direction Atelier naturel examinée sur écran de bureau.
- Saisie d’un pays de démonstration, changement d’étape, retour, rechargement : valeur conservée, observée dans le champ.
- Budget de test 200 minimum / 100 maximum : progression bloquée et message d’erreur visible. Correction du maximum à 300 : accès à l’étape suivante.
- Case solaire sélectionnée : « Oui » dans le résumé.
- Téléchargement JSON réellement déclenché ; fichier reçu, parsé et vérifié (pays, budget, solaire et mention indicative).
- Après ces tests, correction de deux chemins de validation : lever l’erreur budget quand l’un ou l’autre montant change ; revérifier le budget avant résumé si navigation directe. Syntaxe vérifiée à nouveau. Le chemin nominal avait été testé ; ces deux chemins additionnels n’ont pas encore fait l’objet d’une nouvelle recette exhaustive.

## Ce qui n’a pas été testé ou construit
Pas de backend ni de comptes ; aucun moteur géométrique ou IA ; pas de 3D, paiements ou PWA. Aucun des 50 terrains encore exécuté : le moteur n’existe pas à cette phase. Pas de mesure Lighthouse, pas d’appareil mobile réel, pas d’audit complet WCAG ou de sécurité. Les petits textes auxiliaires de la maquette sont inférieurs au seuil de 16 px du produit final : à ajuster pendant l’implémentation React. Les recommandations locales, prix et règles restent à documenter et faire relire. Aucun cahier de recette signé, aucune conformité revendiquée.

## Validation attendue
Ted choisit une direction graphique (Atelier naturel / Studio minéral / Terre & lumière) et valide le parcours et l’architecture. La phase 1 commencera uniquement après son accord, conformément au cahier des charges.
