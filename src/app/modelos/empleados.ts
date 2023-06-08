export class Empleados {
    id: number;
    nombre: string;
    pais:string;
   
    constructor(nombre:string = "",pais:string = "", id:number = 0) {

        this.id = id;
        this.nombre = nombre;
        this.pais = pais;
    }
}
