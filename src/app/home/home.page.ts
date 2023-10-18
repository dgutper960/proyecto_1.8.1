import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html', //Asociación a archivo html
  styleUrls: ['home.page.scss'], //Asociación a archivo css
})
export class HomePage {

  //almacenamos la entrada del susuario
  num: number = 0; // de tipo number
  numBinario: number = 0;



  constructor() {}

  // creamos el método para pasar a binario
  conversorBinario(num){
    
  }

}
