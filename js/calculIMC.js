			
document.getElementById("calculer").onclick = calculImc;		

function calculImc () {

var poids = document.getElementById("poids").value;
var taille = document.getElementById("taille").value;

var maigre = "entre 16 et 18 vous êtes maigre";
var normal = "vous êtes normal";
var surpoids = "vous êtes surpoids";


var imc = poids / (taille*taille);


console.log(imc);		
		
		if (imc > 16 && imc < 18) {
			document.getElementById("sortie").innerHTML = maigre;	
		} 
		
		else if (imc > 18 && imc < 25) {
			
			document.getElementById("sortie").innerHTML = normal;			
		} 
		
		else if (imc > 25 && imc < 30) {
			document.getElementById("sortie").innerHTML = surpoids;			
		} 
		
}