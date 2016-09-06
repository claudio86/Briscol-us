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
  seme =  Math.floor(Math.random() * (Object.keys(list).length - min + 1) + min);
}

///DAI CARTA
function daiCarta (id_pl) {
	if (_.size(gameCards) != 0){
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
	return pesca(0,card_list); 
}

//NUOVO GIOCO
function nuovoGioco (){
	if (player_list.length == 3) {
		gameCards = card_list;
		trePlayers();console.log('3player');
	}
	else {
		gameCards = card_list;console.log(gameCards);
	}
	selSeme ();
	playerOrder (player_list);
}

///ELIMINA CARTA SE 3 GIOCATORI
function trePlayers () {
	var listaDue = ['d2','c2','b2','s2'];
	var carta = [Math.floor(Math.random() * 4) + 1];
	carta_rimossa = gameCards[listaDue[carta-1]];
	delete gameCards[listaDue[carta-1]];
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

