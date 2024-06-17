# Probability Manager.js
Un semplice framework per JS che semplifica la gestione della probabilità, soprattutto per il riscatto di ricompense nei videogame.

## Guida all'uso
**Istanze**: Dentro di esse, puoi creare più di una *Lista*, verranno poi eseguite in ordine crescente in base al nome (cioè un numero > di 0; non possono esserci liste con lo stesso nome).

**Liste**: Sono un elenco di più Oggetti che possono essere estratti con una certa probabilità, scelta da te.

**Oggetti**: Un oggetto è una variabile, solitamente una stringa di caratteri di testo (esempio: Moneta d'oro), associato a una valore in percentuale (cioè la probabilità di essere estratto).<br>In una Lista, puoi aggiungere tutti gli Oggetti che vuoi, a condizione che la somma di tutti i valori in percentuale sia uguale a 100.