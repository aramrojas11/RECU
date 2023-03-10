var ca =[];
var mi =[];
var al =[];
var fe =[];

function guardar(){
    let can = document.getElementById('can').value;
    let min = document.getElementById('min').value;
    let alb = document.getElementById('alb').value;
    let fec = document.getElementById('fec').value;

    let c1 = new Cancion(can,min,fe);
    ca.push(c1);
    localStorage.setItem(ca,JSON.stringify(ca));
    localStorage.setItem(mi,JSON.stringify(mi));
    
    localStorage.setItem(fe,JSON.stringify(alb));
    localStorage.setItem(fe,JSON.stringify(fec));


    var arrayg = localStorage.getItem('ca');
    var arrayg = localStorage.getItem('mi');

    
    var arrayg = localStorage.getItem('alb');
    var arrayg = localStorage.getItem('fec');
    var mi = JSON.parse(arrayg);
    
    console.log(ca, mi, fe, al)
    alert("SE ENVIO CORECTAMENTE LA CANCIÓN");
    document.getElementById('can').value = ' '
    document.getElementById('min').value = ' '
    document.getElementById('alb').value = ' '
    document.getElementById('fec').value = ' '

    var Entrenadores = [];
var Pokeballs = [];
var Pokemons = [];



function guardardatos() {
   

    Nombre = document.getElementById('name').value;
    Genero = document.getElementById('gen').value;
    Rival = document.getElementById('enemigo').value;
    
    let entrenador = new Entrenador(Nombre,Genero,Rival);

    Entrenadores.push(entrenador);
    
    alert("Se guardo correctamente");
    localStorage.setItem('Entrenadores', JSON.stringify(Entrenadores));
}

}

