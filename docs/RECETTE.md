# MON ARCHITECT — Plan de recette
Date : 27 octobre 2026. Le cahier n’est pas signé ; Ted seul pourra accepter les phases.

## Phase 0 — vérification ciblée
Syntaxe JS ; chargement de la page ; trois thèmes ; saisie, suivant/précédent et navigation directe ; reprise après rechargement ; budget minimum supérieur au maximum ; résumé ; export du brief ; mention indicative. Voir RAPPORT-PHASE-0.md pour résultats réels et limites. Ne pas confondre ces tests avec la recette du moteur.

## Corpus géométrique obligatoire en phase 1 (50 cas au minimum)
10 rectangles (du petit au grand, proportions variées) + 10 parcelles étroites + 10 polygones concaves/irréguliers + 10 terrains en pente (mêmes contrôles planimétriques, étude terrain requise) + 10 cas invalides ou insolubles = 50.
Chaque fixture contient polygone métrique, nord, obstacles, retraits sourcés ou paramètres internes explicitement nommés, programme et statut attendu. Aucun terrain n’est jugé constructible par sa seule géométrie.
Assertions indépendantes : pas de polygones auto-intersectés, aire positive, pièces incluses dans enveloppe admissible, absence de chevauchement intérieur, somme des surfaces cohérente, accès depuis entrée, ouvertures cohérentes et aucune cote négative. Cas limites : NaN, très grandes valeurs, zéro, sommet doublé, minimum d’aire, passage trop étroit, retraits incompatibles, obstacles couvrant toute la zone, plusieurs niveaux et escalier impossible. Tolérance numérique explicite, unités conservées.
Compte rendu pour chaque cas : entrée, sortie, règle évaluée, résultat attendu/observé, durée et capture du plan. Les cas insolubles doivent échouer clairement ; « 50 propositions générées » n’est pas un critère de réussite.

## Scénarios transversaux
- Deux utilisateurs : interdiction de lire/modifier/exporter le projet de l’autre même en changeant l’ID.
- Création/reprise de projet, déconnexion, expiration de session, conflit d’édition et historique immuable.
- Risque sérieux : alerte, alternative, confirmation versionnée, invalidation après modification.
- Sources absentes/périmées : valeur inconnue affichée, aucune norme/prix/climat halluciné.
- Coûts : quantités × prix, postes incomplets, taxes/transport, changement de devise et taux daté.
- Cohérence SVG/3D/PDF/glTF : mêmes pièces, ouvertures, dimensions et version. A4/A3 lisibles à l’impression, mention indicative incluse partout.
- Assistant : fournisseur indisponible, prompt malveillant dans projet, dépassement quota, clé absente, pas d’accès au projet d’autrui.
- Paiements sandbox : succès, refus, annulation, doublon webhook, signature invalide, devise/pays non supporté ; aucun accès payant sur simple retour navigateur.
- Professionnel : attribution explicite, annotations à la bonne version, identité et portée de relecture ; pas de signature simulée.
- Admin : MFA, rôles, publication/retrait d’une donnée, audit, sauvegarde ET restauration mesurée.
- PWA : installation PC/Android/iOS là où prise en charge, démarrage hors connexion, reprise et conflit de versions, retrait des données locales à la déconnexion selon choix explicite.
- Clavier seul, zoom 200/400 %, lecteur d’écran, contrastes de tous états et trois thèmes, contrôle ≥44 px, texte demandé ≥16 px, erreurs annoncées. Audit WCAG 2.2 AA complet avant toute revendication.
- Mesures mobile : profil/appareil/réseau indiqués, plusieurs exécutions Lighthouse, affichage <2,5 s en 4G définie, usage mémoire/FPS 3D mesurés sur téléphone modeste, mode qualité réduit.

## Acceptation de lancement
Aucun bug bloquant/majeur ouvert ; anomalies mineures documentées. Résultats reproductibles et datés, versions des outils, appareils, limites et risques résiduels. Mentions légales/CGU/confidentialité relues pour pays retenus. Accord écrit de Ted requis. Aucun score, signature ou test ne doit être inventé.
