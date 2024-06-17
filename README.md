# Probability Manager.js
Un semplice framework per JS che semplifica la gestione della probabilità, soprattutto per il riscatto di ricompense nei videogame.

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

## Guida all'uso
**Istanze**: Dentro di esse, puoi creare più di una *Lista*, verranno poi eseguite in ordine crescente in base al nome (cioè un numero > di 0; non possono esserci liste con lo stesso nome).

**Liste**: Sono un elenco di più Oggetti che possono essere estratti con una certa probabilità, scelta da te.

**Oggetti**: Un oggetto è una variabile, solitamente una stringa di caratteri di testo (esempio: Moneta d'oro), associato a una valore in percentuale (cioè la probabilità di essere estratto).<br>In una Lista, puoi aggiungere tutti gli Oggetti che vuoi, a condizione che la somma di tutti i valori in percentuale sia uguale a 100.