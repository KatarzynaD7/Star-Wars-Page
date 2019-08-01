var los=Math.floor(Math.random()*2+1);
document.getElementById('nowagra').addEventListener('click',nowaGra);
nowaGra();
 
    var p1="n";
    var p2="n";
    var p3="n";

    var p4="n";
    var p5="n";
    var p6="n";

    var p7="n";
    var p8="n";
    var p9="n";

    document.getElementById('pole1').addEventListener('click', clickPole1);
    document.getElementById('pole2').addEventListener('click', clickPole2);
    document.getElementById('pole3').addEventListener('click', clickPole3);

    document.getElementById('pole4').addEventListener('click', clickPole4);
    document.getElementById('pole5').addEventListener('click', clickPole5);
    document.getElementById('pole6').addEventListener('click', clickPole6);
    
    document.getElementById('pole7').addEventListener('click', clickPole7);
    document.getElementById('pole8').addEventListener('click', clickPole8);
    document.getElementById('pole9').addEventListener('click', clickPole9);

function spr()
{
    if((p1==p2 && p2==p3 && p1!="n") ||
    (p4==p5 && p5==p6 && p4!="n") ||
    (p7==p8 && p8==p9 && p7!="n") ||

    (p1==p5 && p5==p9 && p1!="n") ||
    (p3==p5 && p5==p7 && p3!="n") ||
    (p1==p4 && p4==p7 && p1!="n") ||

    (p2==p5 && p5==p8 && p2!="n") ||
    (p3==p6 && p6==p9 && p3!="n"))
    {
        if(kto=="o")
        {
            document.getElementById('wynik').innerHTML="Wygrana: "+"Vader";
            document.getElementById('kto').innerHTML="";
            document.getElementById('h3').innerHTML="";
        }
       else
        {
            document.getElementById('wynik').innerHTML="Wygrana: "+"Luke";
            document.getElementById('kto').innerHTML="";
            document.getElementById('h3').innerHTML="";
        }
    }
}

function clickPole1()
{
    if(p1=="n")
    {
        if(kto=="o")
        {
            document.getElementById('pole1').innerHTML="<img src='luke.jpg'>";
            p1="o";
            kto="x";
            document.getElementById('kto').innerHTML="<img src='vader.jpg'>";
        }
        else
        {
            document.getElementById('pole1').innerHTML="<img src='vader.jpg'>";
            p1="x";
            kto="o";
            document.getElementById('kto').innerHTML="<img src='luke.jpg'>";
        }
        spr();
    }
}
    
function clickPole2()
{
    if(p2=="n")
    {
        if(kto=="o")
        {
            document.getElementById('pole2').innerHTML="<img src='luke.jpg'>";
            p2="o";
            kto="x";
            document.getElementById('kto').innerHTML="<img src='vader.jpg'>";
        }
        else
        {
            document.getElementById('pole2').innerHTML="<img src='vader.jpg'>";
            p2="x";
            kto="o";
            document.getElementById('kto').innerHTML="<img src='luke.jpg'>";
        }
    spr();
    }
}

function clickPole3()
{
    if(p3=="n")
    {
        if(kto=="o")
        {
            document.getElementById('pole3').innerHTML="<img src='luke.jpg'>";
            p3="o";
            kto="x";
            document.getElementById('kto').innerHTML="<img src='vader.jpg'>";
        }
        else
        {
            document.getElementById('pole3').innerHTML="<img src='vader.jpg'>";
            p3="x";
            kto="o";
            document.getElementById('kto').innerHTML="<img src='luke.jpg'>";
        }
    spr();
    }
}

function clickPole4()
{
    if(p4=="n")
    {
        if(kto=="o")
        {
            document.getElementById('pole4').innerHTML="<img src='luke.jpg'>";
            p4="o";
            kto="x";
            document.getElementById('kto').innerHTML="<img src='vader.jpg'>";
        }
        else
        {
            document.getElementById('pole4').innerHTML="<img src='vader.jpg'>";
            p4="x";
            kto="o";
            document.getElementById('kto').innerHTML="<img src='luke.jpg'>";
        }
    spr();
    }
}

function clickPole5()
{
    if(p5=="n")
    {
        if(kto=="o")
        {
            document.getElementById('pole5').innerHTML="<img src='luke.jpg'>";
            p5="o";
            kto="x";
            document.getElementById('kto').innerHTML="<img src='vader.jpg'>";
        }
        else
        {
            document.getElementById('pole5').innerHTML="<img src='vader.jpg'>";
            p5="x";
            kto="o";
            document.getElementById('kto').innerHTML="<img src='luke.jpg'>";
        }
    spr();
    }
}

function clickPole6()
{
    if(p6=="n")
        {
        if(kto=="o")
        {
            document.getElementById('pole6').innerHTML="<img src='luke.jpg'>";
            p6="o";
            kto="x";
            document.getElementById('kto').innerHTML="<img src='vader.jpg'>";
        }
        else
        {
            document.getElementById('pole6').innerHTML="<img src='vader.jpg'>";
            p6="x";
            kto="o";
            document.getElementById('kto').innerHTML="<img src='luke.jpg'>";
        }
    spr();
    }
}

function clickPole7()
{
if(p7=="n")
    {
        if(kto=="o")
        {
            document.getElementById('pole7').innerHTML="<img src='luke.jpg'>";
            p7="o";
            kto="x";
            document.getElementById('kto').innerHTML="<img src='vader.jpg'>";
        }
        else
        {
            document.getElementById('pole7').innerHTML="<img src='vader.jpg'>";
            p7="x";
            kto="o";
            document.getElementById('kto').innerHTML="<img src='luke.jpg'>";
        }
    spr();
    }
}

function clickPole8()
{
    if(p8=="n")
    {
        if(kto=="o")
        {
            document.getElementById('pole8').innerHTML="<img src='luke.jpg'>";
            p8="o";
            kto="x";
            document.getElementById('kto').innerHTML="<img src='vader.jpg'>";
        }
        else
        {
            document.getElementById('pole8').innerHTML="<img src='vader.jpg'>";
            p8="x";
            kto="o";
            document.getElementById('kto').innerHTML="<img src='luke.jpg'>";
        }
    spr();
    }
}  

function clickPole9()
{
    if(p9=="n")
    {
        if(kto=="o")
        {
            document.getElementById('pole9').innerHTML="<img src='luke.jpg'>";
            p9="o";
            kto="x";
            document.getElementById('kto').innerHTML="<img src='vader.jpg'>";
        }
        else
        {
            document.getElementById('pole9').innerHTML="<img src='vader.jpg'>";
            p9="x";
            kto="o";
            document.getElementById('kto').innerHTML="<img src='luke.jpg'>";
        }
    spr();
    }
}

function nowaGra()
{
    los=Math.floor(Math.random()*2+1);
    document.getElementById('pole1').innerHTML="<img src='blank.jpg'>";
    document.getElementById('pole2').innerHTML="<img src='blank.jpg'>";
    document.getElementById('pole3').innerHTML="<img src='blank.jpg'>";
    document.getElementById('pole4').innerHTML="<img src='blank.jpg'>";
    document.getElementById('pole5').innerHTML="<img src='blank.jpg'>";
    document.getElementById('pole6').innerHTML="<img src='blank.jpg'>";
    document.getElementById('pole7').innerHTML="<img src='blank.jpg'>";
    document.getElementById('pole8').innerHTML="<img src='blank.jpg'>";
    document.getElementById('pole9').innerHTML="<img src='blank.jpg'>";
          
    if(los==1)
    {
        kto="o";
        document.getElementById('kto').innerHTML="<img src='luke.jpg'>";
    }
    else
    {
        kto="x";
        document.getElementById('kto').innerHTML="<img src='vader.jpg'>";
    }

    p1="n";
    p2="n";
    p3="n";
    p4="n";
    p5="n";
    p6="n";
    p7="n";
    p8="n";
    p9="n";

}
    
if(Math.round(Math.random()*10)==0)
{
    document.getElementById("cytat").innerHTML="R2-D2 to skrót od żargonu edytorów filmu „Reel 2, Dialog 2”."
}
else if(Math.round(Math.random()*10)==1)
{
    document.getElementById("cytat").innerHTML="Nazwa Ewoki wzięła się tak naprawdę od plemienia Miwok – natywnego rodu Ameryki żyjącego w miejscu, gdzie kręcono sceny do „Powrotu Jedi”."
}
else if(Math.round(Math.random()*10)==2)
{
    document.getElementById("cytat").innerHTML="Rasa, do której należał E.T., jest częścią uniwersum Gwiezdnych wojen. Można zobaczyć kilku ich przedstawicieli w Senacie Galaktycznym."
}
else if(Math.round(Math.random()*10)==3)
{
    document.getElementById("cytat").innerHTML="Podczas kręcenia scen walki Ewan McGregor wczuwał się w rolę tak bardzo, że sam wydawał charakterystyczne odgłosy mieczy świetlnych. Zostały one usunięte w postprodukcji."
}
else if(Math.round(Math.random()*10)==4)
{
    document.getElementById("cytat").innerHTML="We wczesnej wersji historii R2-D2 miał mówić po angielsku i mieć dość nieprzyjemne usposobienie."
}
else if(Math.round(Math.random()*10)==5)
{
    document.getElementById("cytat").innerHTML="Potrzebnych było aż 10 lalkarzy, aby operować całym cielskiem Jabby."
}
else if(Math.round(Math.random()*10)==6)
{
    document.getElementById("cytat").innerHTML="Język jawów to przyspieszona wersja języka zulu."
}
else if(Math.round(Math.random()*10)==7)
{
    document.getElementById("cytat").innerHTML="Anakin Skywalker/Darth Vader spełnia 6 z 9 kryteriów osobowości chwiejnej emocjonalnie typu borderline (do postawienia diagnozy wystarczy 5)."
}
else if(Math.round(Math.random()*10)==8)
{
    document.getElementById("cytat").innerHTML="Aby postać Dartha Vadera wypadła w odpowiedni sposób, pracowało nad tym aż trzech aktorów. "
}
else if(Math.round(Math.random()*10)==9)
{
    document.getElementById("cytat").innerHTML="James Cameron po obejrzeniu SW pierwszy raz w 1977 roku porzucił pracę taksówkarza, aby rozpocząć karierę w przemyśle filmowym. "
}
else if(Math.round(Math.random()*10)==9)
{
    document.getElementById("cytat").innerHTML="Wszystkie części Gwiezdnych wojen miały premierę w przeciągu dwóch tygodni po urodzinach George'a Lucasa (14 maja)."
}