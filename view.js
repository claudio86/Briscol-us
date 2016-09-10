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