document.getElementById('wzrost').addEventListener("click", datawzrost);
document.getElementById('waga').addEventListener("click", datawaga);
document.getElementById('bmi').addEventListener('click', databmi);

var tab1=[];
var i=-1;

function CompareNr(a, b)
{
    return a[1]-b[1];
}

function databmi()
{
    document.getElementById('data_place').innerHTML="";
    document.getElementById('data_place').innerHTML="Ładowanie";
                            var time=setInterval(function()
                            {
                            
                            document.getElementById('data_place').innerHTML+=".";
                            },500);

            fetch('https://swapi.co/api/people/').then(function(response)
                {
                    return response.json();
                })
                .then(function(jsonData){
                            
                    clearInterval(time);
                    document.getElementById('data_place').innerHTML="";

                    jsonData.results.forEach(function(item){

                        i++;
                        
                        var wzrost=item.height/100;
                        tab1[i]=[item.name," "+Math.round(item.mass/(wzrost*wzrost))];  
                        
                    });

                    var tab2=tab1.sort(CompareNr);
                        for(i=0;i<10;i++)
                        {
                            document.getElementById('data_place').innerHTML+=tab2[i]+" </br>";
                        }
                });
            }
function datawzrost()
{
    document.getElementById('data_place').innerHTML="";
    document.getElementById('data_place').innerHTML="Ładowanie";
                            var time=setInterval(function()
                            {
                            document.getElementById('data_place').innerHTML+=".";
                            },500);

            fetch('https://swapi.co/api/people/').then(function(response)
                {
                    return response.json();
                })
                .then(function(jsonData){
                            
                    clearInterval(time);
                    document.getElementById('data_place').innerHTML="";

                    jsonData.results.forEach(function(item){
                        i++;
                        
                        tab1[i]=[item.name," "+item.height];
                    });

                    var tab2=tab1.sort(CompareNr);
                        for(i=0;i<10;i++)
                        {
                            document.getElementById('data_place').innerHTML+=tab2[i]+" </br>";
                        }  
                });
}

function datawaga()
{
    document.getElementById('data_place').innerHTML="";
    document.getElementById('data_place').innerHTML="Ładowanie";
                            var time=setInterval(function()
                            {
                            document.getElementById('data_place').innerHTML+=".";
                            },500);

            fetch('https://swapi.co/api/people/').then(function(response)
                {   
                    return response.json();
                })
                .then(function(jsonData){
                            
                    clearInterval(time);
                    document.getElementById('data_place').innerHTML="";

                    jsonData.results.forEach(function(item){
                        i++;
                        tab1[i]=[item.name," "+item.weight];
                    });

                    var tab2=tab1.sort(CompareNr);
                        console.log(tab2);
                        for(i=0;i<10;i++)
                        {
                            document.getElementById('data_place').innerHTML+=tab2[i]+" </br>";
                        }     
                });
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