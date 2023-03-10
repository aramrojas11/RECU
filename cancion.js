class Cancion{
    nombre;
    cancion;
    minutos;
    album;
    fecha;

constructor(nom,can,min,fec,alb){
    this.nombre = nom
    this.cancion = can
    this.minutos = min
    
    this.album = alb
    this.fecha = fec
    }
    verInformacion =function(){
        return `El Nombre es ${this.name},su Genero es ${this.gen},su Rival es ${this.enemigo}`;
      }
}


  
 

