
//ALGORITMO RANDOM
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
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

///DAI CARTA
function daiCarta (id_pl) {
	if (_.size(card_list) != 0){
		shuffle(card_list);
	}
	else {
		return false;
	}
}

///ASSEGNA ORDINE GIOCATORI
var player_list = ["Pippo","Pluto"];
function playerOrder (player_list) {
	return shuffle(player_list);
}

///SELEZIONA SEME
function selSeme () {
	return shuffle(card_list); 
}

//ELIMINA CARTA SE 3 GIOCATORI
function trePlayers () {
	var listaDue = ['d2','b2','c2','s2'];
	var carta = [Math.floor(Math.random() * 4) + 1];
	delete gameCards[listaDue[carta]];
}

//NUOVO GIOCO
function nuovoGioco (){
	var gameCards = card_list;
}

//CONTEGGIO PUNTI PARTITE PRECEDENTI

