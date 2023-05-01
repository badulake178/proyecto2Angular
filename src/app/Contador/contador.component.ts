import { Component, OnInit } from "@angular/core";
import { Persona } from "../persona";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})

export class ContadorComponent implements OnInit{
    constructor(){

    }
    ngOnInit(): void {
        
    }

    nombre:string = 'Eduardo Fuentealba';
    edad:any = 1;
    //Definir objet
    /*
    persona: Persona={
        nombre: "Eduardo",
        apellido: "Fuentealba",
        edad: 30
    }
    */

    numero: number = 1;

    //metodos
    decremento(){
        this.numero--; // disminuye una unidad
    }

    incremento(){
        this.numero++; // aumenta una unidad
    }


}