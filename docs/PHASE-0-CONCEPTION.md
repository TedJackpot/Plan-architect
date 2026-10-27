> Document historique de phase 0. Pour l’état actuel après la demande de poursuivre sans pause, voir ETAT-LIVRAISON.md et EXPLOITATION.md.

# MON ARCHITECT — Phase 0 : conception
Date : 27 octobre 2026. Statut : proposé, à valider par Ted avant phase 1.

## Livré et limites
Maquette statique navigable, trois thèmes réellement applicables, six étapes, sauvegarde locale du brief, résumé et export JSON. Illustration originale en perspective et schéma de pièces : fixes, sans échelle, indépendants du brief. Aucun moteur de plans, compte, IA, rendu 3D, prix local ou paiement n’est implémenté. Le code statique est une maquette ; l’application React sera développée après validation, sans transformer cette maquette en moteur improvisé.
Le cahier des charges original est conservé intégralement dans CAHIER-DES-CHARGES-ORIGINAL.txt. Rien n’est supprimé ; le périmètre est réparti ci-dessous.

## Direction artistique : trois options à comparer
1. Atelier naturel : fond ivoire #f6f3eb, vert profond #274d41, accent sable #c7b089, titres à empattements. Recommandation de conception : chaleureux et adapté à un atelier pédagogique. Ce choix reste à valider.
2. Studio minéral : fond gris clair #f0f3f5, bleu #253e53, accent ardoise ; typographie sans empattements. Expression plus technique.
3. Terre & lumière : fond crème #fbf2e9, terre cuite #793c2e, accent ocre ; titres à empattements. Expression plus chaleureuse.
Polices système uniquement pour cette maquette ; aucun téléchargement externe. Corps 16 px, interligne 1,6, contrôles de formulaire ≥ 48 px. Petits textes auxiliaires plus petits dans cette maquette : à revoir avant certification d’accessibilité. Le seuil de 16 px demandé sera appliqué aux contenus de l’application finale ; aucune conformité WCAG n’est revendiquée ici.

## Parcours et écrans futurs
Accueil → compte ou découverte → tableau de bord des projets → 6 étapes (zone, terrain, besoins, style, budget, équipements) → état de génération → comparaison économique/équilibrée/premium → atelier (masse, 2D, 3D, coupes, façades, toiture) → matériaux et coûts → guide chantier → dossier et partage → relecture professionnelle.
Navigation de l’atelier : Projet / Terrain / Plans / Maquette / Matériaux / Budget / Guide / Versions / Partage. Assistant contextuel accessible sans masquer les alertes. Chaque écran aura ses états vide, chargement, erreur récupérable, hors connexion et réussite. La zone principale présente une action prioritaire ; les options avancées sont repliables.
Administration séparée : utilisateurs, rôles, projets, données et sources, règles, guide, langues, thème, modération, facturation, journal et sauvegardes. Espace professionnel : projets confiés, annotations liées à une version, rapport et attestation de relecture dont le périmètre est explicite.

## Architecture proposée (décision de conception)
Front : React + TypeScript, SVG pour les plans, Three.js pour la 3D en phase 2. API : FastAPI Python. Base : PostgreSQL, avec JSONB pour la géométrie et les versions ; une seule base au lancement. Stockage d’objets pour les exports et textures. Un service API monolithique modulaire avant toute séparation en microservices. Versionnement des dépendances fixé au démarrage de phase 1 après contrôle des versions maintenues.
La maquette utilise l’hébergement statique disponible ici. L’application FastAPI nécessitera un hébergement Python distinct : cette maquette ne constitue pas un hébergement du backend. Pas de basculement silencieux vers une autre pile. Les tarifs réels et limites des hébergeurs seront vérifiés avant tout achat. Aucun abonnement, paiement, domaine ou service IA payant activé aujourd’hui. Pas de promesse d’un coût mensuel chiffré sans devis actuel et hypothèses d’usage.
Organisation cible : frontend/src/{features,components,locales}, backend/app/{auth,projects,geometry,rules,generation,catalog,estimates,guide,ai,admin,billing}, tests/{geometry,integration,e2e}, data et docs.

## Modèle des données
- User : identité, rôle, langue, consentements, empreinte de mot de passe (hachage, pas chiffrement réversible), double authentification admin.
- Project : propriétaire, membres autorisés, pays, unité, devise, terrain, besoins et état.
- ProjectVersion : instantané immuable, numéro, parent, auteur, date, hash, versions du moteur et du catalogue.
- SiteGeometry : polygone en mètres, nord en degrés, système de coordonnées documenté, pente, route, obstacles et retraits par limite avec source.
- Plan : niveaux, pièces/polygones, relations, murs, portes, fenêtres, escalier et toiture. Identifiants stables pour annotations et dérivation 2D/3D.
- ValidationReport : statut géométrique, règles évaluées, règles inconnues, alertes, informations manquantes. Une absence d’erreur géométrique n’est jamais une conformité structurelle ou réglementaire.
- Alert : niveau, explication, conséquence, alternative, référence ; confirmation liée à la version exacte pour risque sérieux. Toute modification invalide la confirmation si le risque change.
- KnowledgeRecord : sujet, pays/région, proposition, source officielle/fabricant, URL, date de publication, consultation, périmètre, unité, statut brouillon/revu/retiré, réviseur. Aucune donnée inconnue remplacée par zéro.
- Price : matériau, unité, montant, devise, localisation, date de validité, fournisseur/source, taxes, transport, fourchette d’incertitude.
- Review, Annotation, ShareLink (jeton aléatoire haché, expiration, révocation, périmètre), AuditEvent, ExportJob, Subscription, PaymentEvent avec clé d’idempotence.

## Contrats d’API prévus
POST /auth/register, /auth/login, /auth/logout ; GET/PATCH /me ; ressources /projects et /projects/{id}/versions ; POST /projects/{id}/validate, /proposals, /exports ; GET /catalog et /guide ; POST /assistant/messages ; /reviews, /annotations, /shares ; /admin/* ; /billing/webhooks.
Accès vérifié côté serveur pour chaque ressource ; aucune confiance dans les seuls boutons masqués. JSON validé et borné, pagination, quotas, limite de taille des polygones/fichiers et codes d’erreur stables. Modification d’un projet avec version attendue ; conflit explicite, pas d’écrasement silencieux.

## Moteur de plans : contrat de responsabilité
1. Normaliser unités, terrain et nord ; détecter auto-intersections, sommets dupliqués, surface nulle, trous et données manquantes.
2. L’IA propose un programme JSON borné ; jamais un plan exécutoire, ni du SVG/HTML exécuté directement.
3. Le solveur construit les polygones et vérifie inclusion dans le terrain et retraits, chevauchements, connexions et circulations. Les minima sont des paramètres de conception séparés des normes locales sourcées ; aucun minimum légal universel inventé.
4. Ventilation/soleil/eau/escaliers : heuristiques nommées et documentées, pas une simulation certifiée. Sans vents fiables, diagnostic « données insuffisantes ».
5. Corrections bornées avec nombre maximal d’itérations et historique. Si insoluble : ne pas publier un faux plan « validé ». Présenter les contraintes en conflit et proposer une modification. Le souhait du client demeure consultable avec son alerte, sans validation fictive.
6. Risque sérieux : avertissement visible, alternative et confirmation avant dossier de la proposition demandée. Aucune instruction de dimensionnement structurel définitif.
7. Un même modèle versionné alimente 2D, masse, 3D, export, quantités et coûts. Cotes, unités, échelle et nord proviennent du modèle, jamais d’une image générée.
8. Coût = somme(quantité_i × prix_unitaire_i) + postes explicites. Afficher détail, devise, date et incertitudes ; ne pas totaliser comme complet un dossier comportant des prix inconnus. Arrondis et taux de change datés visibles.

## Catalogue initial et données manquantes
Le fichier data/catalogue-initial.json est un registre de collecte structuré, non une base de recommandations validées. Zones : chaud humide, chaud sec, tempéré et froid, sans attribution automatique d’un pays ni chiffres climatiques. Styles : traditionnel local, contemporain, tropical et moderne ; options esthétiques, sans présumer l’adaptation. Familles de matériaux et critères prévus dans le catalogue, sans prix, durée de vie ou disponibilité locale inventés.
Gabon et France proposés comme premiers dossiers de localisation, sans limiter les pays futurs. La commune, les sources locales, les prix, le professionnel référent et les traductions seront à documenter avant utilisation réelle. Le portail climatique Banque mondiale n’a pas pu être consulté directement (403) ; aucun jeu climatique n’est intégré. Une source statistique nationale ne tranche pas un risque de parcelle : le terrain, la mairie et les études locales restent nécessaires.

## Sécurité et honnêteté intégrées
Mention exacte du cahier des charges sur les écrans clés et dans chaque export. Pas de promesse « sûr/conforme ». Hachage des mots de passe, sessions sécurisées, CSRF selon mode d’authentification, limitation des tentatives, révocation, MFA admin, permissions et audit. Secrets IA seulement serveur ; quota utilisateur, plafond global, journal de coûts et arrêt sur plafond. Données projet traitées comme contenu non fiable pour l’assistant ; outils serveur autorisés explicitement.
Aucune donnée personnelle envoyée à une IA avant information et choix du client. Prévoir accès/export/suppression et durée de conservation. Les textes juridiques seront adaptés et relus : cette phase ne certifie ni RGPD ni lois locales. Cookies nécessaires seulement au lancement ; consentement avant traceurs optionnels. Sauvegardes chiffrées et test de restauration avant lancement ; aucune sauvegarde opérationnelle revendiquée sur la seule foi d’un bouton.

## Répartition complète du cahier des charges
| Section du prompt | Phase | Livrable et preuve attendue |
| --- | --- | --- |
| 1 Vision | 0–5 | Parcours, produit par phases et limites visibles |
| 2 Parcours | 1 | Six étapes complètes, polygone souris/tactile, reprise et comparaison |
| 3 Moteur | 1–2 | JSON, règles, corrections, édition, impacts et 50 terrains |
| 4 Plans/3D | 1–2 | SVG par niveau, masse ; coupes/façades/toiture ; PDF A4/A3, PNG, glTF ; visite, éclaté, toit, niveaux, soleil/saisons, jardin, jour/nuit, avant/après |
| 5 Matériaux | 0/3/4 | Catalogue, sources, alternatives, critères, quantités et prix administrables |
| 6 Guide | 3 | Toutes les étapes du prompt, illustrations, glossaire, réception, questions artisans et alertes arnaques |
| 7 IA | 3 | Contexte du projet, explications, langues, limites, fournisseur configurable et dépenses plafonnées |
| 8 Comptes/pros | 1/4 | Versions, historique, partages, exports ; annotations et relecture ; mise en relation différée explicitement |
| 9 CRM | 4 | Tous modules, thèmes/textes/langues, rôles, audit, sauvegardes/restauration et exports |
| 10 Économie | 4 | Gratuit, interrupteurs, carte/Mobile Money par pays, sandbox puis activation contrôlée |
| 11 Technique | 1–5 | React/FastAPI/PostgreSQL/Three.js ; FR/EN extensibles ; unités/devises ; PWA, projets hors connexion et conflits |
| 12 Qualité | 0–5 | Design choisi, accessibilité, sécurité, mesures mobiles, recette et documentation |
| 13 Phases | 0–5 | Validation explicite de Ted à chaque passage |

## Feuille de livraison et décisions
Phase 0 : maquette, architecture, registre initial, matrice et recette. Besoin de Ted : choix d’une des trois directions. Risque : confondre le prototype et le produit ; étiquettes explicites.
Phase 1 : React/API/base/comptes, six étapes réelles, terrain polygonal, validations, trois variantes 2D et édition. Besoins : localisations prioritaires et paramètres sourcés. Risques : terrains insolubles et conflits de versions. Preuves : tests géométriques + isolation des comptes + reprise.
Phase 2 : modèle commun 2D/3D, coupes, façades, toiture, exploration et tous exports. Besoin : retours sur manipulations. Risques : mémoire mobile et divergence de géométrie. Preuves : correspondance des ouvertures/cotes, appareils modestes et qualité adaptative.
Phase 3 : catalogue relu, coûts détaillés, guide complet, assistant et traductions FR/EN. Besoins : prix locaux, réviseur et fournisseur IA. Risques : données périmées/hallucinations. Preuves : indisponibilité, sources, quotas et couverture du guide.
Phase 4 : CRM/pros/paiements en test, ensuite activation sur accord. Besoins : identité légale, pays et agrégateur compatible vérifié à cette date. Risques : droits, callbacks doublés et remboursement. Preuves : tests de rôles, relecture versionnée, sandbox, échecs et idempotence.
Phase 5 : PWA, cache local autorisé, synchronisation et conflits ; audits performance, accessibilité et sécurité ; sauvegarde/restauration, documentation exploitation et déploiement. Besoins : domaine, hébergeur et recette signée. Risques : données hors connexion et configurations réelles. Preuves : voir RECETTE.md.
Les objectifs Lighthouse ≥90, affichage <2,5 s, 3D fluide et absence de bug majeur sont des critères à mesurer, pas des résultats déjà atteints.

## Références techniques vérifiées le 27 octobre 2026
- React : https://react.dev/ — composants d’interface.
- FastAPI : https://fastapi.tiangolo.com/ — framework API Python.
- PostgreSQL : https://www.postgresql.org/docs/current/index.html — documentation officielle, choix de stockage proposé.
- Three.js : https://threejs.org/docs/ — scène, géométrie, caméras et rendu.
- Banque mondiale : https://data.worldbank.org/country/ga — pointe vers les données climatiques du CCKP. Aucun chiffre repris.
Ces liens expliquent les briques envisagées ; ils ne constituent pas une validation du projet ni une source réglementaire de construction.
