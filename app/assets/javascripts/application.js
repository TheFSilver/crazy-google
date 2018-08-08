// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

function Hey() { // Fonction d'affichage du "porn popup"
	alert("Ce que tu fais est vraiment frais, négro !");
}

var set = 0;
function change() { // Fonction du bouton du mode psychedelique

	// Déclenchement du mode psychedelique

	if ( set == 0){
		set++;
		document.body.style.backgroundColor = "magenta"; // Changement du background

		var px = document.getElementsByClassName("para"); // Changement des style paragraphes
		for (var i = 0; i < px.length; i++) {
		px[i].style.color="blue";
		px[i].style.fontFamily = "papyrus";
		}

		var hx = document.getElementsByClassName("headers"); // Changement des style headings
		for (var j = 0; j < hx.length; j++) {
		hx[j].style.color="green";
		hx[j].style.fontFamily = "Comic Sans MS";
		}
	}

	// Retour au style CSS par défaut

	 else if (set == 1){
		set--;
		document.body.style.backgroundColor = "transparent"; // Reset du background

		var px = document.getElementsByClassName("para"); // Reset des style paragraphes
		for (var i = 0; i < px.length; i++) {
		px[i].style.color="inherit";
		px[i].style.fontFamily = "inherit";
		}

		var hx = document.getElementsByClassName("headers"); // Reset des style headings
		for (var j = 0; j < hx.length; j++) {
		hx[j].style.color="inherit";
		hx[j].style.fontFamily = "inherit";
		}
	}
}
