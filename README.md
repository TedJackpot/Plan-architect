# MON ARCHITECT

Atelier web d’avant-projet résidentiel pour Ted. Palette : **bleu marine, blanc, ambre**.

## Version fonctionnelle initiale
React/TypeScript, serveur Vinext sur Workers et base D1. La pile FastAPI/PostgreSQL de la conception initiale a été remplacée pour pouvoir héberger l’application dans l’environnement disponible ; aucune API Python fictive n’est annoncée.

- Parcours en six étapes, contour polygonal modifiable au doigt et au clavier, programme et options.
- Trois variantes déterministes, contrôles géométriques, édition d’une cloison mitoyenne et fenêtres, avant/après.
- Plans SVG, masse, vues schématiques de coupe/façade/toiture ; maquette Three.js, rotation/zoom, toit, niveaux, éclaté, soleil indicatif, visite libre. Rendu SVG 3D de secours si WebGL manque.
- PDF A4/A3, SVG/PNG, glTF autonome, dossier JSON et réimport contrôlé.
- Compte ChatGPT, projets serveur, sauvegarde automatique, versions et conflits, liens temporaires révoquables, relecture sur autorisation.
- Matériaux et conseils généraux sourcés, calculs de quantités avec hypothèses, prix saisis et datés ; guide 16 étapes, glossaire et réception.
- Administration : utilisateurs/rôles, catalogue et prix, contenus, plafonds IA, journal, sauvegarde et restauration en copies.
- Manifeste PWA, service worker et brouillon local hors connexion. Déconnexion visible avec effacement du brouillon et du cache.

## Ce qui demande encore un raccordement ou une validation
Aucune clé IA ni prestation de paiement n’est activée. Les variables secrètes serveur sont `AI_API_KEY`, `AI_ENDPOINT`, `AI_MODEL`. Les quotas applicatifs ne constituent pas une garantie de plafond financier : configurer aussi les limites de facturation du fournisseur avant activation. Aucun encaissement carte/Mobile Money n’est simulé.

Les données climatiques et règles d’urbanisme de parcelle ne sont pas intégrées automatiquement. La disponibilité locale et les performances des produits doivent être documentées. Le français est complet pour les parcours présents ; EN ne traduit actuellement que la navigation. Les coupes et façades sont des schémas d’intention simplifiés. Le moteur cherche des empreintes rectangulaires dans un polygone ; il ne remplace pas un solveur architectural général ni une étude structurelle.

Le site est publié en accès privé au propriétaire. Il n’est pas présenté comme une ouverture commerciale : textes légaux de l’exploitant, politiques de conservation, audit WCAG, mesures Lighthouse/mobile et restauration d’exploitation restent à valider. La MFA dépend de la protection du compte ChatGPT ; aucun second facteur propre à l’application n’est revendiqué.

## Développement
Node.js 24, pnpm (version fixée par `packageManager`).
```sh
pnpm install --frozen-lockfile
pnpm dev
```
Pour l’environnement Sites, utiliser les scripts du plugin Sites (instructions d’hébergement dans docs/EXPLOITATION.md).

## Vérifications
```sh
pnpm exec tsc --noEmit
node --experimental-strip-types tests/engine.test.ts
pnpm build
node --experimental-strip-types tests/api.integration.mjs
```
Le test API instancie un Worker et une base D1 isolés, applique les migrations et vérifie les droits et versions ; aucun compte réel ni fournisseur payant n’est utilisé. Rapports : `docs/RESULTATS-50-TERRAINS.json`, `docs/RESULTATS-API.json`, `docs/ETAT-LIVRAISON.md`.

La conception de phase 0 est conservée pour historique. La dernière instruction de Ted demande de poursuivre toutes les phases sans arrêt : les anciennes pauses de validation ne s’appliquent plus.

**Document indicatif. Les plans, la structure (fondations, poteaux, poutres, charpente) et le respect des règles d'urbanisme et de construction doivent être validés par un architecte ou un ingénieur agréé avant tout permis ou chantier.**
