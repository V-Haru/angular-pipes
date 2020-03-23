import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capián América';
  nombre2 = 'SaUl ViLLeDA';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;
  fecha = new Date();
  activar = true;
  idioma = 'es';
  videoUrl = 'https://www.youtube.com/embed/rTNfgIAi3pY';
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });
  heroe = {
    nombre: 'logan',
    clave: 'wolverine',
    edad: 60,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };
}
