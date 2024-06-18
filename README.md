# Probability Manager.js
Una semplice libreria per JS che semplifica la gestione della probabilità, soprattutto per il riscatto di ricompense nei videogame.

<div align="center">

  ![State](https://img.shields.io/badge/State%3A-Making-white?style=flat-square)
  <!-- [![CodeQL](https://github.com/Croc-Prog-github/Probability-Manager.js/actions/workflows/github-code-scanning/codeql/badge.svg?style=flat-square&branch=main)](https://github.com/Croc-Prog-github/Probability-Manager.js/actions/workflows/github-code-scanning/codeql) -->
</div>
<hr>
<div align="center">

  <!-- ![Downloads](https://img.shields.io/github/downloads/Croc-Prog-github/Probability-Manager.js/total) -->
  ![GitHub Repo stars](https://img.shields.io/github/stars/Croc-Prog-github/Probability-Manager.js?style=flat-square&color=yellow)
  ![GitHub repo size](https://img.shields.io/github/repo-size/Croc-Prog-github/Probability-Manager.js?style=flat-square)
  ![Code quality](https://img.shields.io/badge/Code%20Quality-A-lighgreen?style=flat-square)
  ![Licenze](https://img.shields.io/badge/licenze-MIT-blue?style=flat-square&link=https%3A%2F%2Fgithub.com%2FCroc-Prog-github%2FProbability-Manager.js%2Fblob%2Fmain%2FLICENSE.md)
  <!-- ![Manteined](https://img.shields.io/badge/Aggiornamenti-SI!-green) -->
  <!-- ![Contributors](https://img.shields.io/github/contributors/Croc-Prog-github/Probability-Manager.js?style=flat-square) -->
</div>

## Spiegazione
**Istanze**: Dentro di esse, puoi creare più di una *Lista*, verranno poi eseguite in ordine crescente in base al nome (cioè un numero > di 0; non possono esserci liste con lo stesso nome).

**Liste**: Sono un elenco di più Oggetti che possono essere estratti con una certa probabilità, scelta da te.

**Oggetti**: Un oggetto è una variabile, solitamente una stringa di caratteri di testo (esempio: Moneta d'oro), associato a una valore in percentuale (cioè la probabilità di essere estratto).<br>In una Lista, puoi aggiungere tutti gli Oggetti che vuoi, a condizione che la somma di tutti i valori in percentuale sia uguale a 100.

## Utilizzo
Utilizza i seguenti comandi per includere il file nel tuo script:<br>
**JavaScript**:
```js
import probManager from "https://raw.githubusercontent.com/Croc-Prog-github/Probability-Manager.js/main/core/Probability-Manager.js";
```

**TypeScript**
```ts
import probManager from "https://raw.githubusercontent.com/Croc-Prog-github/Probability-Manager.js/main/core/Probability-Manager.ts";
```

## Comandi
In questa sezione sono specificati tutti i comandi utilizzabili, con la loro relativa spiegazione.

- `probManager.constructor()`
Viene utilizzato per creare un'istanza ProbabilityManager che gestirà le varie liste e oggetti con le loro probabilità.

- `probManager.addList(instanceName, listName)`
Aggiunge una nuova lista all'interno di una specifica istanza. Se l'istanza o la lista non esiste, viene creata. Le liste sono ordinate ed eseguite in ordine crescente: il nome deve essere un numero intero > di 0.<br>
**instanceName**: Il nome dell'istanza.<br>
**listName**: Il nome della lista da aggiungere (deve essere un numero intero > 0).

- `probManager.addObject(instanceName, listName, object, probability)`
Aggiunge un oggetto ad una lista all'interno di una specifica istanza con una determinata probabilità. La somma delle probabilità di tutti gli oggetti in una lista deve essere pari a 100.<br>
**instanceName**: Il nome dell'istanza.<br>
**listName**: Il nome della lista (cioè un numero int > 0) a cui aggiungere l'oggetto.<br>
**object**: Il nome dell'oggetto da aggiungere.<br>
**probability**: La probabilità dell'oggetto di essere estratto, espresso in valore numerico (anche decimale, ma > 0).

- `probManager.getRandomObject(instanceName, listName)`
Estrae un oggetto casuale da una lista all'interno di una specifica istanza, basandosi sulle probabilità degli oggetti nella lista.<br>
**instanceName**: Il nome dell'istanza.<br>
**listName**: Il nome della lista da cui estrarre l'oggetto.

- `probManager.clearInstance(instanceName)`
Rimuove tutte le liste e gli oggetti associati a una specifica istanza.<br>**instanceName** Il nome dell'istanza da rimuovere.

- `probManager.clearAll()`
Rimuove tutte le istanze, insieme a tutte le liste e gli oggetti associati.