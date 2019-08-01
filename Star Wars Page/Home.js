setTimeout ( "ZmianaObrazka()", 4500 );

function ZmianaObrazka ( )
{
    if(document.getElementById("r2d2wita").src="r2d2old.png") 
    {
    document.getElementById("r2d2wita").src="r2d2new.png";
    }
}

document.addEventListener('keydown', key);
function key(e)
{
    var keyCode= e.keyCode;
    console.log(keyCode);
    switch(keyCode)
    {
        case 13:
            document.getElementById('animacja').innerHTML="<div class='row puste2' id='tutaj'></div><div class='col-md-1'></div><div class='col-md-10 text' id='text'><h1 >Witaj na naszej stronie poświęconej tematyce uniwersum 'Gwiezdnych wojen'!</br></br></h1><h3>U góry znajduje się menu, z którego możesz skorzystać by poruszać się po naszej stronie.</br>Podczas tej podróży będzie Ci towarzyszył C-3PO</br></br></h3><h2>Niech moc bedzie z Tobą!</h2></div>"
            break;
    }
}