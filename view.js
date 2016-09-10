//GIOCA CARTE
function giocaCarte(){
	for (i=0;i<carte_in_mano_player.length;i++) {
		console.log(carte_in_mano_player[turno])
		var scegli_carte = "<div class='cards'>"+ carte_in_mano_player[turno][i] +"</div>";
		document.getElementById('n').innerHTML = scegli_carte;
	}
	
}