import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // tslint:disable: variable-name
  private _objetos: Array<string[]> = [
    ['uno', 'dos', 'tres', 'cuatro', 'cinco'],
    ['pato', 'gato', 'serpiente', 'pajaro', 'vaca'],
    ['amarillo', 'azul', 'rojo', 'verde', 'violeta'],
  ];
  private _lenguaje = 'ar';
  private _tipo = 0;
  private _tipo_str = 'num';

  constructor(
    private _spinnerServ: SpinnerService,
    public platform: Platform,
    private _authServ: AuthService,
    private _router: Router,
    private _nativeAudio: NativeAudio
  ) {
    this._nativeAudio.preloadSimple('error', 'assets/sonidos/error.mp3');
    /*
    //#region Numeros
    // Numeros AR
    this._nativeAudio.preloadSimple('uno_ar', 'assets/sonidos/num/uno_ar.mp3');
    this._nativeAudio.preloadSimple('dos_ar', 'assets/sonidos/num/dos_ar.mp3');
    this._nativeAudio.preloadSimple('tres_ar', 'assets/sonidos/num/tres_ar.mp3');
    this._nativeAudio.preloadSimple('cuatro_ar', 'assets/sonidos/num/cuatro_ar.mp3');
    this._nativeAudio.preloadSimple('cinco_ar', 'assets/sonidos/num/cinco_ar.mp3');
    // Numeros EN
    this._nativeAudio.preloadSimple('uno_en', 'assets/sonidos/num/uno_en.mp3');
    this._nativeAudio.preloadSimple('dos_en', 'assets/sonidos/num/dos_en.mp3');
    this._nativeAudio.preloadSimple('tres_en', 'assets/sonidos/num/tres_en.mp3');
    this._nativeAudio.preloadSimple('cuatro_en', 'assets/sonidos/num/cuatro_en.mp3');
    this._nativeAudio.preloadSimple('cinco_en', 'assets/sonidos/num/cinco_en.mp3');
    // Numeros POR
    this._nativeAudio.preloadSimple('uno_por', 'assets/sonidos/num/uno_por.mp3');
    this._nativeAudio.preloadSimple('dos_por', 'assets/sonidos/num/dos_por.mp3');
    this._nativeAudio.preloadSimple('tres_por', 'assets/sonidos/num/tres_por.mp3');
    this._nativeAudio.preloadSimple('cuatro_por', 'assets/sonidos/num/cuatro_por.mp3');
    this._nativeAudio.preloadSimple('cinco_por', 'assets/sonidos/num/cinco_por.mp3');
    //#endregion

    //#region Animales
    // Animales AR
    this._nativeAudio.preloadSimple('pato_ar', 'assets/sonidos/ani/pato_ar.mp3');
    this._nativeAudio.preloadSimple('gato_ar', 'assets/sonidos/ani/gato_ar.mp3');
    this._nativeAudio.preloadSimple('serpiente_ar', 'assets/sonidos/ani/serpiente_ar.mp3');
    this._nativeAudio.preloadSimple('pajaro_ar', 'assets/sonidos/ani/pajaro_ar.mp3');
    this._nativeAudio.preloadSimple('vaca_ar', 'assets/sonidos/ani/vaca_ar.mp3');
    // Animales EN
    this._nativeAudio.preloadSimple('pato_en', 'assets/sonidos/ani/pato_en.mp3');
    this._nativeAudio.preloadSimple('gato_en', 'assets/sonidos/ani/gato_en.mp3');
    this._nativeAudio.preloadSimple('serpiente_en', 'assets/sonidos/ani/serpiente_en.mp3');
    this._nativeAudio.preloadSimple('pajaro_en', 'assets/sonidos/ani/pajaro_en.mp3');
    this._nativeAudio.preloadSimple('vaca_en', 'assets/sonidos/ani/vaca_en.mp3');
    // Animales POR
    this._nativeAudio.preloadSimple('pato_por', 'assets/sonidos/ani/pato_por.mp3');
    this._nativeAudio.preloadSimple('gato_por', 'assets/sonidos/ani/gato_por.mp3');
    this._nativeAudio.preloadSimple('serpiente_por', 'assets/sonidos/ani/serpiente_por.mp3');
    this._nativeAudio.preloadSimple('pajaro_por', 'assets/sonidos/ani/pajaro_por.mp3');
    this._nativeAudio.preloadSimple('vaca_por', 'assets/sonidos/ani/vaca_por.mp3');
    //#endregion

    //#region Colores
    // Colores AR
    this._nativeAudio.preloadSimple('amarillo_ar', 'assets/sonidos/col/amarillo_ar.mp3');
    this._nativeAudio.preloadSimple('azul_ar', 'assets/sonidos/col/azul_ar.mp3');
    this._nativeAudio.preloadSimple('rojo_ar', 'assets/sonidos/col/rojo_ar.mp3');
    this._nativeAudio.preloadSimple('verde_ar', 'assets/sonidos/col/verde_ar.mp3');
    this._nativeAudio.preloadSimple('violeta_ar', 'assets/sonidos/col/violeta_ar.mp3');
    // Colores EN
    this._nativeAudio.preloadSimple('amarillo_en', 'assets/sonidos/col/amarillo_en.mp3');
    this._nativeAudio.preloadSimple('azul_en', 'assets/sonidos/col/azul_en.mp3');
    this._nativeAudio.preloadSimple('rojo_en', 'assets/sonidos/col/rojo_en.mp3');
    this._nativeAudio.preloadSimple('verde_en', 'assets/sonidos/col/verde_en.mp3');
    this._nativeAudio.preloadSimple('violeta_en', 'assets/sonidos/col/violeta_en.mp3');
    // Colores POR
    this._nativeAudio.preloadSimple('amarillo_por', 'assets/sonidos/col/amarillo_por.mp3');
    this._nativeAudio.preloadSimple('azul_por', 'assets/sonidos/col/azul_por.mp3');
    this._nativeAudio.preloadSimple('rojo_por', 'assets/sonidos/col/rojo_por.mp3');
    this._nativeAudio.preloadSimple('verde_por', 'assets/sonidos/col/verde_por.mp3');
    this._nativeAudio.preloadSimple('violeta_por', 'assets/sonidos/col/violeta_por.mp3');
    //#endregion
    */
  }

  public playObject(id: string) {
    // console.log(id);
    this._nativeAudio.play(id, () => { this._nativeAudio.unload(id); })
      .catch((errPlay) => {
        // this._nativeAudio.play('error');

        // alert('Error al reproducir' + errPlay);
        // console.log('Error al reproducir', errPlay);

        this._nativeAudio.preloadSimple(id, 'assets/sonidos/' + this._tipo_str + '/' + id + '.mp3')
          .then(() => {
            this.playObject(id);
          }).catch((err) => {
            this._nativeAudio.play('error');

            // alert('Error al cargar' + err);
            // console.log('Error al cargar', err);
          });
      });
  }

  ionViewDidEnter() {
    this._spinnerServ.hideSpinner();
  }

  public cambiarIdioma(index: string) {
    this._lenguaje = index;
  }

  public cambiarTipo(index: number) {
    switch (index) {
      case 1: { this._tipo_str = 'ani'; break; }
      case 2: { this._tipo_str = 'col'; break; }
      default: { this._tipo_str = 'num'; break; }
    }

    this._tipo = index;
  }

  public cerrarSesion() {
    this._spinnerServ.showSpinner();

    this._authServ.cerrarSesion().then(() => {
      this._router.navigate(['login']);
      this._spinnerServ.hideSpinner();
    });
  }
}
