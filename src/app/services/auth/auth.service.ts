import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _auth: AngularFireAuth
  ) { }

  public get authState(): Observable<firebase.User> {
    return this._auth.authState;
  }

  public iniciarSesion(credenciales: { correo: string, clave: string }) {
    return this._auth.auth.signInWithEmailAndPassword(credenciales.correo, credenciales.clave)
      .then((user: firebase.auth.UserCredential) => {
        console.log('Logueo exitoso');
      });
  }

  public cerrarSesion() {
    return this._auth.auth.signOut()
      .catch((error: any) => {
        console.log(error);
      });
  }
}
