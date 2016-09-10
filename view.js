//GIOCA CARTE
function giocaCarte(){
	var scegli_carte = document.getElementById('n');
	for (i=0;i<carte_in_mano_player[turno].length;i++) {
		scegli_carte.innerHTML += "<div id='cards-"+i+"'>"+ carte_in_mano_player[turno][i] +"</div>";
	}	
}