# BingoTable — src/ui/components/Bingo/Bingo-Table.vue

Grille de bingo (5x5 par défaut, configurable). Gère l'état global, calcule la taille des tampons, écoute les clics.

## Props

| Nom | Type | Requis | Défaut | Description |
|---|---|---|---|---|
| `size` | `number` | oui | — | Nombre de cases par côté (ex. 5 = 5x5) |

## Events

Aucun (état interne).

## Slots

Aucun.

## État interne

- `table` ref `BingoTable[]` — état des cases (valeur, checked).
- `stampSize` ref `number` — taille du tampon calculée d'après la largeur du conteneur.

## Dépendances

- Enfant : `BingoCase.vue`.

## Exemple d'usage

```vue
<BingoTable :size="5" />
```

## Quand NE PAS l'utiliser

- Pour grilles supérieures à 10x10 : considérer virtualisation.
- Pour affichage statique : utiliser une table HTML.
