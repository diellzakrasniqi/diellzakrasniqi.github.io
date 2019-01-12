

/* Perdorimi i JS Dom duke perdorur metoden slideToggle() me parametrin e shpejtesise(speed)*/
$(document).ready(function(){
    $("#flip1").click(function(){
        $(".panel1").slideToggle("slow");
    });
});
/* Perdorimi i JS Dom duke perdorur metoden slideToggle() me parametrin e shpejtesise(speed)*/

$(document).ready(function(){
    $("#flip2").click(function(){
        $(".panel1").slideToggle("slow");
    });
});
/* Perdorimi i JS Dom duke perdorur metoden slideToggle() me parametrin e shpejtesise(speed)*/

$(document).ready(function(){
    $("#flip3").click(function(){
        $(".panel1").slideToggle("slow");
    });
});
/* Perdorimi i JS Dom duke perdorur metoden slideToggle() me parametrin e shpejtesise(speed)*/

$(document).ready(function(){
    $("#flip4").click(function(){
        $(".panel1").slideToggle("slow");
    });
});
/* Perdorimi i funksionit numrimaksimal() i cili kthen numrin me vleren me te madhe permes metodes Math.max() */
function numrimaksimal()
{
    document.getElementById("demo1").innerHTML = Math.max(25000,200000,30000,17000000)+" dollars";
}
/* Perdorimi i metodes String, toString() qe kthen  vleren e nje String Object*/
function myFunction1() {
    var str = "<i>Giorgio Armani,Ralph Lauren,Miuccia Prada,Dolce&Gabbana,Valentino Garavani</i>";
    var res = str.toString();
    document.getElementById("demo3").innerHTML = res;
}
/*Perdorimi i JavaScript Number metodes toString() qe konverton nje numer ne nje string */
function myFunction2() {
    var num = 87;
    var n = num.toString();
    document.getElementById("demo4").innerHTML = n;
}
/* Perdorimi i metodes replace() per te zevendsuar nje fjale me nje fjale tjeter,metoda replace() si default eshte case-sensitive dhe e zevendeson vetem 
the first match*/
function myFunction3() {
    var str = document.getElementById("demo5").innerHTML; 
    var res = str.replace("England", "Moscow");
    document.getElementById("demo5").innerHTML = res;
}
/* Perdorimi i jQuery duke perdorur metoden text() qe vendos ose kthen permbajtjen e tekstit te elementeve te specifikuara  , ne kete rast vendos tekstin
kur ne klikojm tek butonet e specifikuara*/
$(document).ready(function(){
 $("#icon1").click(function(){
        $("#test1").text("Twiggy");
    });
    $("#icon2").click(function(){
        $("#test2").text("Madonna");
    });
	
	$("#icon3").click(function(){
        $("#test3").text("Audrey Hepburn");
    });
	$("#icon4").click(function(){
        $("#test4").text("Michael Jackson");
    });
	
	$("#icon5").click(function(){
        $("#test5").text("Naomi Campell");
    });
	
$("#icon6").click(function(){
        $("#test6").text("Princess Diana");
    });
	
});

/* Perdorimimi i jQuery duke perdorur metoden hide() qe permban parametrin speed,se pari shfaqet alert message pastaj fshehet  paragrafi i specifikuar
,per dallim nga shembulli3 kur ne klikojme tek butoni,se pari fshehet paragrafi passtaj paraqitet alert message,pra kemi perdorur edhe parametrin callback*/
$(document).ready(function(){

 $("#but1").click(function(){
        $("#p11").hide(1000);
        alert("Her real name is Lesley Lawson.");
    });
	 $("#but2").click(function(){
        $("#p22").hide(1000);
        alert("Her father is Italian, her mother was French-Canadian.");
    });
    
    $("#but3").click(function(){
        $("#p33").hide(1000,function(){
        alert("She spoke five languages.");
    });
	});
     $("#but4").click(function(){
        $("#p44").hide(1000);
        alert("Michael Jackson is The Most-Awarded Artist Of All Time. ");
    });
    $("#but5").click(function(){
        $("#p55").hide(1000);
        alert("She began modeeling at age 15, becoming the first black woman on the cover of French Vogue at 18.");
    }); 
    $("#but6").click(function(){
        $("#p66").hide(1000);
        alert("Her old sister,dated prince Charles before Diana did.");
    });
});


