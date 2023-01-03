<meta charset="UTF-8">
 
<script> 
//Tipos de concatenação quebra de linha (+" <br>";) usando na mesma linha 	
document.write("Estou começando os estudos em javascript") + "<br>";
//outro tipo é usando o document.write("<br>"); 
document.write("<br>");
document.write(200 + 100 + 300 + 400/4);
document.write("<br>");
document.write("Felipe nasceu em  " + (2016 - 39));
document.write("<br>");
document.write("Joaquim nasceu em " + (2016 - 20));
document.write("<br>");
document.write("Augusto nasceu em " + (2016 - 40));
document.write("<br>");

//Exemplo sem uso de variavel document.write("A média das idades é" + (39 + 20 + 41)/3);
var idadeFelipe = 39;
var idadeJoaquim = 20;
var idadeAugusto = 41;
document.write("A média das idades é" + (idadeFelipe + idadeJoaquim + idadeAugusto)/3);
document.write("<br>");
var media = (39 + 20 +41)/3;
document.write("A média das idades é " + Math.round(media));
document.write("<br>");
document.write("<br>");

var nome = "Felipe";
document.write("<br>A idade de " + nome  + " é " + idadeFelipe);


</script>

Comentario em Html, pois está fora da TAG script.