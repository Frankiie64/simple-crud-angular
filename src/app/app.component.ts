import { Component } from '@angular/core';
import {Empleados} from './modelos/empleados';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Crud Angular';
  listadoEmpleados: Empleados[] = [
    {id:1,nombre:"Frank",pais:"RD"}
  ];

  empleadoActivo: Empleados = new Empleados();


  guardar(){

    if(this.empleadoActivo.id === 0){
      this.empleadoActivo.id = this.findLastId() + 1
      this.listadoEmpleados.push(this.empleadoActivo);
    }
    else{
      const empleadoExistente = this.listadoEmpleados.find(x => x.id === this.empleadoActivo.id);
      if (empleadoExistente) {
        empleadoExistente.id = this.empleadoActivo.id;
        empleadoExistente.nombre = this.empleadoActivo.nombre;
        empleadoExistente.pais = this.empleadoActivo.pais;
      }  
    }

    this.empleadoActivo = new Empleados();
   
  }

  eliminar(){
    this.listadoEmpleados = this.listadoEmpleados.filter(x=>x.id != this.empleadoActivo.id);
    this.empleadoActivo = new Empleados();

    return;
  }

  desmarcar(){
    this.empleadoActivo = new Empleados();
  }

  mostrarEmpleado(empleado:Empleados){

    this.empleadoActivo.nombre = empleado.nombre;
    this.empleadoActivo.id = empleado.id;
    this.empleadoActivo.pais = empleado.pais;
    return;
  }

  findLastId():number{

    let id = 0;
    this.listadoEmpleados.forEach(element => {

       if(element.id > id){
          id = element.id;
       }
    });

    return id;
  }
 
}
