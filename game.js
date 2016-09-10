console.log(state);


//GIOCO 

	function gioco (){
		//INIZIO PARTITA
		if (state == 0){
			creaMazzo();
			trePlayers ();
			selSeme ();
			playerOrder ();
			daiCarta();
			stato (1);
			gioco();
		}
		//TURNO GIOCATORI
		if (state == 1){
			giocaPlayer();
			stato (2);			
		}
		if (state == 3){
			daiCarta();
			stato (1);
			turno = 0;
			giocaPlayer();
		}
	}									

	
