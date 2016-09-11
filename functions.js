///LISTA GIOCATORI
function creaGiocatori () {
	for (i=0;i<player_list.length;i++) {
		carte_in_mano_player[i] = [];
		carte_vinte_giocatore[i] = [];
	}
	if (!turno) {
		turno = player_list.indexOf(player_list[0]);
	}
}

//TURNO GIOCATORE //DA MIGLIORARE TOGLIERE GLI IF
function giocaPlayer() {
	tastoTurno();	
	aggCarte ();
	mostraCarte();
	giocaCarte();
	for (i=0;i<carte_in_mano_player.length;i++){
		if (carte_in_mano_player[i]==0) {return haVinto(player_list[i]);}
	}
	if (turno == player_list.length){
		prendiPunti();
	}
	if (turno >= player_list.length){
		stato(3);
		return gioco();
	}
	for (i=0;i<carte_in_mano_player.length;i++){
		scegli_carta[i] = document.getElementById('cards-'+i);
	}
	if (scegli_carta[0] != null) {
			scegli_carta[0].onclick = function() {
			giocaCarta(carte_in_mano_player[turno][0]);
		}
	}
	if (scegli_carta[1] != null) {
			scegli_carta[1].onclick = function() {
			giocaCarta(carte_in_mano_player[turno][1]);
		}	
	}
	if (scegli_carta[2] != null) {
			scegli_carta[2].onclick = function() {
			giocaCarta(carte_in_mano_player[turno][2]);
		}
	}

}

///GIOCA CARTA
function giocaCarta (carta){
	carte_tavola.push (carta);
	mostraCarteInTavola();
	index = carte_in_mano_player[turno].indexOf(carta);
	carte_in_mano_player[turno].splice(index,1);
	aggCarte ();
	mostraCarte();
	giocaCarte();
}

//PRENDI PUNTI / MANCA ASSOCIARE CARTE TAVOLA AD ARRAY CARTE GENERALE PER PRENDERE 
function prendiPunti () {
	for (i=0;i<carte_tavola.length;i++) {
		x = carte_tavola [i];
		carte_da_prendere.push (card_list[x][1]);
		if (card_list[carte_tavola[i]][3] == seme ){
			briscole.push (carte_tavola[i]) ;
			briscola = 1;
		}
	}
	if (briscola != 1 ){
		punti_carta_che_prende = Math.max (...carte_da_prendere);
		index = carte_da_prendere.indexOf(punti_carta_che_prende);
		carte_vinte_giocatore[index].push (carte_tavola);
		carte_tavola = [];
		punti_carta_che_prende = [];
		carte_da_prendere = [];
	}
	else {
		punti_carta_che_prende = Math.max (...briscole);
		index = briscole.indexOf(punti_carta_che_prende);
		carte_vinte_giocatore[index].push (carte_tavola);
		carte_tavola = [];
		punti_carta_che_prende = [];
		briscole = [];
		carte_da_prendere = [];
		briscola = 0;
	}
	
}

//GIOCATORE SUCCESSIVO
function giocatoreSuccessivo (){
	turno += 1;
	giocaPlayer();
}

//TURNO SUCCESSIVO
function turnoSuccessivo (){
	turno =0;
	prendiPunti ();
	daiCarta ();
	giocaPlayer();
}

///AGGIORNA CARTE IN MANO
function aggCarte () {
	document.getElementById('n').innerHTML = "";	
	document.getElementById('carte_giocatore').innerHTML = "";	
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

