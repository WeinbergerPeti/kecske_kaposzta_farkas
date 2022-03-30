function ID(elem)
{
    return document.getElementById(elem);
}

function $(elem)
{
    return document.querySelector(elem);
}

function $All(elem)
{
    return document.querySelectorAll(elem);
}

function CLASS(elem)
{
    return document.getElementsByClassName(elem);
}

window.addEventListener("load", init);

var kepekSrc=[];

function init()
{
    nevAtiras();

    var kepHossz=$All("#bal img").length;
    for (let i = 0; i < kepHossz; i++) 
    {
        $All("#bal img")[i].addEventListener("click", kepMentes)
    }

    for (let i = 0; i < kepHossz; i++) 
    {
        $All("#bal img")[i].addEventListener("mouseover", egerRavisz);
        $All("#bal img")[i].addEventListener("mouseout", egerLevesz);
    }
}

function egerRavisz()
{
    event.target.className="kiemel";
}

function egerLevesz()
{
    event.target.className="";
}

function kepMentes()
{

    kepekSrc.push(event.target.src);
    event.target.removeEventListener("click", kepMentes);
    console.log(kepekSrc);
}


function nevAtiras()
{
    $("footer p").innerHTML="Weinberger Péter";
}
