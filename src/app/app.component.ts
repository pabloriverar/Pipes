import { Component } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 nombre:string = 'Capitan America';

 arreglo = [1,2,3,4,5,6,7,8,9,10];

 PI:number = Math.PI;

 porcentaje: number = 0.234;

 Salario:number = 1234.5;

 fecha: Date = new Date();

 idioma: string = 'es';

 heroe = {
   nombre : 'Logan',
   clave: 'Wolverine',
   edad: 500,
   direccion: {
     calle:'primera',
     casa: 20
   }
 }

valorPromesa = new Promise<string> ((resolve) => {

  setTimeout(()=>{
resolve('llego la data');

  },4500);

});




}


