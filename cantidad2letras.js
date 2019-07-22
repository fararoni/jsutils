var o=new Array("DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISEIS", "DIECISIETE", "DECIOCHO", "DIESCINUEVE", "VEINTE", "VEINTIÚN", "VEINTIDOS", "VEINTITRES", "VEINTICUATRO", "VEINTICINCO", "VEINTISEIS", "VEINTISIETE", "VEINTIOCHO", "VEINTINUEVE");
var u=new Array("CERO", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE");
var d=new Array("", "", "", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA");
var c=new Array("", "CIENTO", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS", "QUINIENTOS", "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS");
 
function nn(n)
{
  var n=parseFloat(n).toFixed(2); /*se limita a dos decimales, no sabía que existía toFixed() :)*/
  var p=n.toString().substring(n.toString().indexOf(".")+1); /*decimales*/
  var m=n.toString().substring(0,n.toString().indexOf(".")); /*número sin decimales*/
  var m=parseFloat(m).toString().split("").reverse(); /*tampoco que reverse() existía :D*/
  var t="";
 
  /*Se analiza cada 3 dígitos*/
  for (var i=0; i<m.length; i+=3)
  {
    var x=t;
    /*formamos un número de 2 dígitos*/
    var b=m[i+1]!=undefined?parseFloat(m[i+1].toString()+m[i].toString()):parseFloat(m[i].toString());
    /*analizamos el 3 dígito*/
    t=m[i+2]!=undefined?(c[m[i+2]]+" "):"";
    t+=b<10?u[b]:(b<30?o[b-10]:(d[m[i+1]]+(m[i]=='0'?"":(" Y "+u[m[i]]))));
    t=t=="CIENTO CERO"?"CIEN":t;
    
    //if ( 0 < i && i < 3 )
       t=t=="TREINTA Y UNO"?"TREINTA Y UN ":(t.replace("UNO","UN"));
    if ( 2<i && i<6)
      t=t=="UNO"?"MIL ":(t.replace("UNO","UN")+" MIL ");
    if (5<i&&i<9)
      t=t=="UNO"?"UN MILLON ":(t.replace("UNO","UN")+" MILLONES");
    t+=x;
    //t=i<3?t:(i<6?((t=="uno"?"mil ":(t+" mil "))+x):((t=="uno"?"un millón ":(t+" millones "))+x));
  }
 
  t+=" PESOS "+p+"/100 MN";
  /*correcciones*/
  t=t.replace("  "," ");
  t=t.replace(" CERO","");
  //t=t.replace("ciento y","cien y");
  //alert("Numero: "+n+"\nNº Dígitos: "+m.length+"\nDígitos: "+m+"\nDecimales: "+p+"\nt: "+t);
  //document.getElementById("esc").value=t;
  return t;
}