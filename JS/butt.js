var k=0;
function fun(num)
{
for(var i=0;i<8;i++)
	{
Math.random();
document.write("<td> <input type=" + ' button ' + " class= " + 'but' + "  id= " + k + " value=" + String.fromCharCode(65 + (90 - 65) *Math.random()) +" onclick=" + 'display(id)' + "> </td>");
++k;
	}
}

var s="";
function display(ids)
{
var z=document.getElementById(ids).value;
s=s+z;
var tex=document.getElementById('tb');
tex.value=tex.value+z;

}
var myVar=setInterval(function(){myTimer()},1000);

t=120;
function myTimer()
{
document.getElementById("sec").innerHTML=t;
t=t-1;
}
function cle()
{
var tex=document.getElementById('tb');
tex.value="";
}
function era()
{
var tex=document.getElementById('tb');
s=tex.value;

s = s.substring(0, s.length - 1);
tex.value=s;
}

score=000;

function score(t)
{
score=score+t;
document.getElementById("pts").innerHTML=score;
}

function word()
{
var tex=document.getElementById('tb');
s=tex.value;
len=s.length;
switch(len)
{
case 3:
 word3(s);
break;
case 4:
word4(s);
break;


}
s="";
}

