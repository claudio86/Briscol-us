//LISTA GIOCATORI

/*
function creaGicoatori () {
	var player_list = [];
	for (i=0;object i<cards_per_player;i++){
		player_list.push (i);
	}
}
*/
//PESCA
function pesca(min, list) {
  return Math.floor(Math.random() * (Object.keys(list).length - min + 1) + min);
}

///DAI CARTA
function daiCarta (id_pl) {
	if (Object.keys(gameCards).length != 0){
		mischia(gameCards);
	}
	else {
		return false;
	}
}

///ASSEGNA ORDINE GIOCATORI
function playerOrder (player_list) {
	return mischia(player_list);
}

///SELEZIONA SEME
function selSeme () {
	var carta = pesca(0,card_list); 
	if ( carta <= 9) { seme = 0;}
	if ( carta >= 10 && carta <= 19) { seme = 1;}
	if ( carta >= 20 && carta <= 29) { seme = 2;}
	if ( carta >= 30) { seme = 3;}
	//return carta;
}

//NUOVO GIOCO
function nuovoGioco (){
	gameCards = card_list;
	trePlayers ();
	selSeme ();
	playerOrder (player_list);
}

///ELIMINA CARTA SE 3 GIOCATORI
function trePlayers () {
	if (player_list.length == 3) {	
		console.log('3player');
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

  // While there remain elements to mischia...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


//CONTEGGIO PUNTI PARTITE PRECEDENTI

