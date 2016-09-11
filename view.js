//GIOCA CARTE
function giocaCarte(){
	var scegli_carte = document.getElementById('n');
	for (i=0;i<carte_in_mano_player[turno].length;i++) {
		scegli_carte.innerHTML += "<div class='carte-in-mano text-center panel panel-default col-sm-3 col-md-3' id='cards-"+i+"'>"+ card_list[carte_in_mano_player[turno][i]][0]+"</div>";
	}	
}

function mostraSeme(){
	var scegli_carte = document.getElementById('seme');
		scegli_carte.innerHTML += "<div class='carte-in-mano text-center panel panel-default col-sm-6 col-md-6'>"
		+ card_list[gameCards[gameCards.length-1]][0]+"</div>";
}

function mostraCarte(){
	var scegli_carte = document.getElementById('carte_giocatore');
		scegli_carte.innerHTML = "Tocca a " + player_list[turno];
}

function mostraCarteInTavola(){
	var scegli_carte = document.getElementById('carte-in-tavola');
	var testo = "";	
	console.log('carte in tavola 1= '+ carte_tavola.length);
	if (carte_tavola.length > 0){
		for (i=0;i<carte_tavola.length;i++) {
			 testo += "<div class='carte-in-mano text-center panel panel-default col-sm-3 col-md-3' id='cardss-" + i + "'>"
			 + card_list[carte_tavola[i]][0] +"</div>";
		}	
		scegli_carte.innerHTML = testo;
	}
}

function tastoTurno(){
	var tasto_turno = document.getElementById('turno-successivo');
	if (turno == player_list.length-1) {
		tasto_turno.innerHTML = "Turno successivo";
		tasto_turno.onclick = function() {
		turnoSuccessivo();
		}		
	}
	else {
		tasto_turno.innerHTML = "Prossimo giocatore";
		tasto_turno.onclick = function() {
		giocatoreSuccessivo();
		}
	}
}
