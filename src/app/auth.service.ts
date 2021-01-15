import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*Datos en duro*/
  public usuario: string;
  public clave: string;

  constructor() { }

  public signIn(userData: User){
    this.usuario = "administrador@gmail.com";
    this.clave = "administrador";

    if(this.usuario==userData.email&&this.clave==userData.password){
      console.log('Datos válidos');

      localStorage.setItem('ACCESS_TOKEN', "access_token");
      localStorage.setItem('LLAVE',userData.email+userData.password);
    }else{
      console.log('Datos inválidos');
      
    }
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
