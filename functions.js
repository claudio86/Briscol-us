//LISTA GIOCATORI
function creaGicoatori () {
	for (i=0;i<player_list.length;i++) {
		carte_in_mano_player[i] = []
	}
}

///PESCA
function pesca(min, list) {
	var random = Math.floor(Math.random() * (Object.keys(list).length));
	var carta_pescata = gameCards[random];
	index = gameCards.indexOf(carta_pescata);
	console.log('carta_pescata');
	console.log(carta_pescata);
	gameCards.splice(index, 1);
	return carta_pescata;
}

///DAI CARTA ADESSO FUNZIONA MA BISOGNA IMPOSTARE FINE CARTE
function daiCarta () {
	if (gameCards.length != 0){
		if(carte_in_mano_player[carte_in_mano_player.length-1].length < cards_per_player){
			for (i=0;i<player_list.length;i++) {
				console.log('carte in mano');
				carte_in_mano_player[i].push ( pesca (0,gameCards) );	
				console.log(carte_in_mano_player);	
			}
			daiCarta();
		}
	}
	else {
		return haVinto();
	}
}

///ASSEGNA ORDINE GIOCATORI
function playerOrder (player_list) {
	mischia(player_list);
	creaGicoatori ();
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


//CREA MAZZO
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
//		var carta = [Math.floor(Math.random() * 4)];
		carta_rimossa = gameCards[listaDue[random]];
//		console.log(carta_rimossa);
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
function haVinto (){
	console.log('ha vinto');
}


//CONTEGGIO PUNTI PARTITE PRECEDENTI

