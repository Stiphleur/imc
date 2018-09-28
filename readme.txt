Jolie alerte avec "alert()"---------------------------
Url     : http://codes-sources.commentcamarche.net/source/52414-jolie-alerte-avec-alertAuteur  : cs_heycraftDate    : 06/08/2013
Licence :
=========

Ce document intitulé « Jolie alerte avec "alert()" » issu de CommentCaMarche
(codes-sources.commentcamarche.net) est mis à disposition sous les termes de
la licence Creative Commons. Vous pouvez copier, modifier des copies de cette
source, dans les conditions fixées par la licence, tant que cette note
apparaît clairement.

Description :
=============

Voici une r&eacute;-impl&eacute;mentation de la fonction alert() de javascript, 
en plus jolie et personnalisable soit en CSS, soit a travers le code JavaScript.

<br /><a name='source-exemple'></a><h2> Source / Exemple : </h2>
<br /><pre 
class='code' data-mode='basic'>
// La toute première chose est de modifier la f
onction alert. Ainsi, on appelera non plus la methode du navigateur mais une fon
ction personnalisée
window.alert = function(text, aname)
{
	// Creation de la
 boite
	var div = document.createElement(&quot;div&quot;);
	var box = document
.body.appendChild(div);
	box.setAttribute(&quot;class&quot;, &quot;alertBox&quo
t;);
	box.style.display = &quot;none&quot;;	
	
	// Creation titre
	var span 
= document.createElement(&quot;span&quot;);
	var title = box.appendChild(span);

	title.setAttribute(&quot;class&quot;, &quot;alertTitle&quot;);
	
	// Bouton
 fermant
	var img = document.createElement(&quot;img&quot;);
	var close = box.
appendChild(img);
	close.src = &quot;dialog-close.png&quot;;
	close.width = 26
;
	close.onclick = function()
	{
		document.body.removeChild(box);
	}
	
	/
/ Creation du contenu
	span = document.createElement(&quot;span&quot;);
	var c
ontent = box.appendChild(span);
	content.setAttribute(&quot;class&quot;, &quot;
alertContent&quot;);
	
	// Insertion contenus
	if(typeof(aname) == &quot;unde
fined&quot;)
		aname = &quot;Alert window&quot;
	title.innerHTML = aname;
	co
ntent.innerHTML = text;

	// Definition des style

	var width = 360; // larg
eur
	var height = [160, 480]; // hauteur [min, max]

	box.style.position = &q
uot;absolute&quot;;
	box.style.zIndex = 9998;
	box.style.overflox = &quot;hidd
en&quot;;
	box.style.left = &quot;50%&quot;;
	box.style.top = &quot;50%&quot;;

	box.style.width = width + &quot;px&quot;;
	box.style.minHeight = height[0] +
 &quot;px&quot;;
	box.style.maxHeight = height[1] + &quot;px&quot;;
	box.style
.marginLeft = -(width / 2) + &quot;px&quot;;
	box.style.marginTop = -(box.offse
tHeight / 2) + &quot;px&quot;;
	box.style.border = &quot;1px #000000 solid&quot
;;
	box.style.backgroundColor = &quot;#AFD4DB&quot;;
	box.style.fontFamily = &
quot;sans-serif&quot;;
	// CSS3
	box.style.borderTopRadius = &quot;15px&quot;;

	box.style.borderBottomRadius = &quot;5px&quot;;
	box.style.MozBorderRadius =
 &quot;10px&quot;;
	box.style.boxShadow = &quot;2px 2px 5px #000000&quot;;
	bo
x.style.MozBoxShadow = &quot;2px 2px 12px #000000&quot;;
	
	close.style.positi
on = &quot;absolute&quot;;
	close.style.cursor = &quot;pointer&quot;;
	close.s
tyle.zIndex = 9999;
	close.style.right = &quot;2px&quot;;
	close.style.top = &
quot;2px&quot;;

	title.style.display = &quot;block&quot;;
	title.style.width
 = &quot;100%&quot;;
	title.style.height = &quot;32px&quot;;
	title.style.line
Height = &quot;32px&quot;;
	title.style.textAlign = &quot;center&quot;;
	title
.style.backgroundColor = &quot;#000000&quot;;
	title.style.color = &quot;#FFFFF
F&quot;;
	title.style.fontWeight = &quot;bold&quot;;
	// CSS3
	box.style.bord
erRadius = &quot;5px&quot;;
	box.style.MozBorderRadius = &quot;5px&quot;;
	
	
content.style.display = &quot;block&quot;;
	content.style.width = (width - 8) +
 &quot;px&quot;;
	content.style.minHeight = (height[0] - 40) + &quot;px&quot;;

	content.style.margin = &quot;4px&quot;;
	content.style.fontSize = &quot;14px&
quot;;
	content.style.overflow = &quot;auto&quot;;

	// Affichage
	box.style
.display = &quot;block&quot;;
	
	// Cette fonction recursive permet de replace
r la boite au centre meme si la fenetre est redimensionée
	replacement(box);	

}

function replacement(boite)
{
	boite.style.marginTop = -(boite.offsetHeig
ht / 2) + &quot;px&quot;;
	setTimeout(function(){replacement(boite)}, 200);
}

</pre>
<br /><a name='conclusion'></a><h2> Conclusion : </h2>
<br />Ce petit
 script &agrave; &eacute;t&eacute; r&eacute;alis&eacute; plutot vite et test&eac
ute; uniquement sous Firefox 3.6.11 sous ubuntu.
<br />Je le testerai en d&eacu
te;tails plus tard.
