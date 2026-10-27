# MON ARCHITECT — état de la version initiale

Création de zéro selon le cahier des charges de Ted, puis instruction de continuer sans pauses avec bleu marine/blanc/ambre. Les documents de phase 0 sont historiques. La pile hébergée a été adaptée à React/Vinext/Workers/D1.

## Réalisé
Parcours client six étapes et brouillon local ; projets et versions serveur avec contrôle de concurrence ; terrain polygonal avec saisie des sommets ; variantes 2D déterministes et édition d’une cloison ; contrôles d’inclusion, retraits déclaratifs, chevauchement, dimensions, surfaces et accès au dégagement. Les terrains qui ne conviennent pas au solveur rectangulaire sont signalés.
Maquette Three.js avec rendu WebGL ou SVG léger de secours, niveaux, toit, éclaté, rotation/zoom, heure/saison, jour/nuit et visite libre sans collisions. Export glTF avec géométrie du modèle et couleurs, sans textures exportées. Plans SVG/PNG, PDF vectoriel A4/A3 et dossier JSON. Les coupes/façades/toiture sont schématiques, sans dimensionnement de structure.
Guide sourcé 16 étapes, matériaux par familles, alternatives générales, glossaire, réception ; prix déclaratifs, datés et sourcés, quantités et sous-total partiel détaillé. Assistant compatible fournisseur serveur, consentement et quotas, état explicite non connecté. Comptes, partage révoquable, annotations professionnelles, CRM, catalogue, textes, journal et sauvegarde/restauration en copies. Déconnexion, PWA et cache local.

## Preuves
- Compilation TypeScript et build de production exécutés ; résultats finaux à consulter dans les sorties de commandes et rapports versionnés.
- 50 terrains : 10 rectangles, 10 étroits, 10 irréguliers, 10 en pente, 10 invalides/insolubles. Rapport JSON complet avec résultat attendu/observé. Contrôles supplémentaires d’aires, inclusion, retraits, chevauchement et absence de coordonnées non finies.
- Tests API sur Worker/D1 isolés : accès anonyme, propriétaires/clients/professionnels, isolation, versions, conflit, validation, partage/expiration déclarée/révocation, IA absente, rôle admin, sauvegarde et copies restaurées. Voir RESULTATS-API.json pour le nombre et le résultat exacts.
- Prévisualisation navigateur : accueil, navigation, variantes calculées, plan, garde avant export risqué et case de confirmation ; démarrage du rendu 3D de secours et ouverture du toit observés.
- Téléchargement JSON reçu et contenu vérifié. PDF A4/A3 générés localement, ouverts et rendus ; mention indicative présente sur chaque page. Le capteur de téléchargement du navigateur n’a pas confirmé les essais PDF/SVG : ne pas présenter cette voie comme vérifiée de bout en bout. La validité du fichier PDF a été vérifiée indépendamment.
- WebGL est désactivé dans le navigateur de vérification : rendu léger observé, mode WebGL et fluidité sur téléphone réel non mesurés. Pas de score Lighthouse, d’audit WCAG complet ni de test de connexion ChatGPT de production inventés.

## Raccordements et travaux restant avant un lancement commercial
Fournisseur IA et compte de paiement à choisir/configurer et tester ; prix, climat, risques et règles locales à documenter. Traduction anglaise complète à relire (navigation EN seulement actuellement). Signature professionnelle, mise en relation vérifiée et validation de permis ne sont pas simulées. Optimisation sur téléphones modestes, tests de restauration d’exploitation, textes légaux et protection des données à valider. La MFA reste celle du compte d’identité. L’IA n’a pas de plafond monétaire certifié par l’application : prévoir celui du fournisseur.
Cette version n’est pas présentée comme l’ensemble du cahier des charges certifié ou prêt à un chantier. Elle constitue un outil d’avant-projet fonctionnel avec limites explicites, à enrichir après les raccordements et validations externes nécessaires.
