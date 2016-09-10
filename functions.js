///LISTA GIOCATORI
function creaGiocatori () {
	for (i=0;i<player_list.length;i++) {
		carte_in_mano_player[i] = [];
		carte_vinte_giocatore[i] = [];
	}
	if (!turno) {
		turno = player_list.indexOf(player_list[0]);
		//console.log(turno);
		console.log(carte_in_mano_player);
	}
}

//TURNO GIOCATORE //DA MIGLIORARE TOGLIERE GLI IF
function giocaPlayer() {
	for (i=0;i<carte_in_mano_player.length;i++){
		if (carte_in_mano_player[i]==0) {return haVinto(player_list[i]);}
	}
	if (turno == player_list.length){
		prendiPunti();
	}
	/*console.log('carte1');
	console.log(gameCards);
	console.log('state');
	console.log('carteinmano');
	console.log(carte_in_mano_player);
	console.log(state);*/
		console.log('turno');
		console.log(turno);
	if (turno >= player_list.length){
		stato(3);
		return gioco();
	}
	giocaCarte();
	for (i=0;i<carte_in_mano_player.length;i++){
		scegli_carta[i] = document.getElementById('cards-'+i);
	}
	if (scegli_carta[0] != null) {
			scegli_carta[0].onclick = function() {
			giocaCarta(carte_in_mano_player[turno][0]);
			turno += 1;
			aggCarte ();
			giocaPlayer();
		}
	}
	if (scegli_carta[1] != null) {
			scegli_carta[1].onclick = function() {
			giocaCarta(carte_in_mano_player[turno][1]);
			turno += 1;
			aggCarte ();
			giocaPlayer();
		}	
	}
	if (scegli_carta[2] != null) {
			scegli_carta[2].onclick = function() {
			giocaCarta(carte_in_mano_player[turno][2]);
			turno += 1;
			aggCarte ();
			giocaPlayer();
		}
	}

}

///GIOCA CARTA
function giocaCarta (carta){
	carte_tavola.push (carta);
	console.log(carte_tavola);
	index = carte_in_mano_player[turno].indexOf(carta);
	carte_in_mano_player[turno].splice(index,1);
	giocaCarte();
}

//PRENDI PUNTI / MANCA ASSOCIARE CARTE TAVOLA AD ARRAY CARTE GENERALE PER PRENDERE 
function prendiPunti () {
	for (i=0;i<carte_tavola.length;i++) {
		x = carte_tavola [i];
		carte_da_prendere.push (card_list[x][1]);
	}
	punti_carta_che_prende = Math.max (...carte_da_prendere);
	console.log(carte_da_prendere);
	index = carte_da_prendere.indexOf(punti_carta_che_prende);
	carte_vinte_giocatore[index].push (carte_tavola);
	console.log('punti_carta_che_prende');
	console.log(punti_carta_che_prende);
	console.log(punti_carta_che_prende);
	console.log(punti_carta_che_prende);
carte_tavola = [];
	punti_carta_che_prende = "";
	console.log('puntiAAA');
	
}

///AGGIORNA CARTE IN MANO
function aggCarte () {
	document.getElementById('n').innerHTML = "";
}

///STATO CAMBIA
function stato (stato){
	state = stato;
}

///PESCA
function pesca(min, list) {
	var random = Math.floor(Math.random() * (Object.keys(list).length));
	var carta_pescata = gameCards[random];
	index = gameCards.indexOf(carta_pescata);
	gameCards.splice(index, 1);
	return carta_pescata;
}

///DAI CARTA ADESSO FUNZIONA MA BISOGNA IMPOSTARE FINE CARTE
function daiCarta () {
	if (gameCards.length != 0){
		if(carte_in_mano_player[carte_in_mano_player.length-1].length < cards_per_player){
			for (i=0;i<player_list.length;i++) {
				carte_in_mano_player[i].push ( pesca (0,gameCards) );	
			}
			daiCarta();
		}
	}
}

///ASSEGNA ORDINE GIOCATORI
function playerOrder () {
	mischia(player_list);
	creaGiocatori ();	
	//return player_list;

}

///SELEZIONA SEME
function selSeme () {
	var carta = Math.floor(Math.random() * (Object.keys(card_list).length + 1));
	if ( carta <= 9) { seme = 0;}
	if ( carta >= 10 && carta <= 19) { seme = 1;}
	if ( carta >= 20 && carta <= 29) { seme = 2;}
	if ( carta >= 30) { seme = 3;}
	index = gameCards.indexOf(carta);
	gameCards.splice(index,1);
	gameCards.push(carta);
	return carta;
}

///CREA MAZZO
function creaMazzo () {
	gameCards = [];
	for (i=0; i < Object.keys(card_list).length; i++) {
		gameCards.push (i);
	}
}

///ELIMINA CARTA SE 3 GIOCATORI
function trePlayers () {
	if (player_list.length == 3) {	
		console.log('3 GIOCATORI');
		var listaDue = ['1','11','21','31'];
		var random = Math.floor(Math.random() * (Object.keys(listaDue).length));
		carta_rimossa = gameCards[listaDue[random]];
		gameCards.splice(random,1);
	}
}

///ALGORITMO RANDOM
function mischia(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//FINE PARTITA
function haVinto (player){
	console.log('ha vinto '+player);
}

//CONTEGGIO PUNTI PARTITE PRECEDENTI

