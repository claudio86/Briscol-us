//LISTA GIOCATORI

/*
function creaGicoatori () {
	var player_list = [];
	for (i=0;object i<cards_per_player;i++){
		player_list.push (i);
	}
}
*/
///PESCA
function pesca(min, list) {
	var carta_pescata = Math.floor(Math.random() * (Object.keys(list).length - min + 1) + min);
	delete gameCards[carta_pescata];
	return carta_pescata;
}

///DAI CARTA ADESSO FUNZIONA MA BISOGNA IMPOSTARE FINE CARTE
function daiCarta () {
	if (Object.keys(gameCards).length != 0){
		for (i=0;i<player_list.length;i++) {
			//console.log(player_list[i]);
			var player = player_list[i];
			carte_in_mano_player[i] = []
			for (n=0;n<player_list.length;n++) {
				console.log(i);
				carte_in_mano_player[i][n] = pesca (0,card_list);
			}
			console.log('carte in mano');
			console.log(carte_in_mano_player);
		}
	}
	else {
		return haVinto();
	}
}

///ASSEGNA ORDINE GIOCATORI
function playerOrder (player_list) {

	//carte_in_mano_player.push(i);

	mischia(player_list);

}

///SELEZIONA SEME
function selSeme () {
	var carta = Math.floor(Math.random() * (Object.keys(card_list).length + 1));
	if ( carta <= 9) { seme = 0;}
	if ( carta >= 10 && carta <= 19) { seme = 1;}
	if ( carta >= 20 && carta <= 29) { seme = 2;}
	if ( carta >= 30) { seme = 3;}
	//return carta;
}

//PARTITA ! MAIN ! ! !
function partita () {
	var c = 0;
	while (c <= 3) {
		daiCarta();
		c++;
	}
}


//NUOVO GIOCO
function nuovoGioco (){
	gameCards = card_list;
	trePlayers ();
	selSeme ();
	playerOrder (player_list);
	partita();
}

//FINE PARTITA
function haVinto (){
	console.log('ha vinto');
}

///ELIMINA CARTA SE 3 GIOCATORI
function trePlayers () {
	if (player_list.length == 3) {	
		console.log('3 GIOCATORI');
		var listaDue = ['1','11','21','31'];
		var carta = [Math.floor(Math.random() * 4) + 1];
		carta_rimossa = gameCards[listaDue[carta-1]];
		delete gameCards[listaDue[carta-1]];
	}
}

//LISTA CARTE IN MANO 
function carteMano (id_pl) {
	
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


//CONTEGGIO PUNTI PARTITE PRECEDENTI

