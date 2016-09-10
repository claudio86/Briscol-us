console.log(state);


//GIOCO 

	function nuovoGioco (){
		//INIZIO PARTITA
		if (state == 0){
			creaMazzo();
			trePlayers ();
			selSeme ();
			playerOrder ();
			daiCarta();
			stato1 ();
			nuovoGioco();
		}
		//TURNO GIOCATORI
		if (state == 1){
			console.log(player_list);
			console.log(state);
			giocaPlayer();
		}
	}									

	



//console.log(player_list);
