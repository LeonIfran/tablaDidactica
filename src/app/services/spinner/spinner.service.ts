import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LoadingOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private _currentLoading: HTMLIonLoadingElement; // This is the spinner
  private _isSpinnerShowing = false;
  private _isGoingToClose = false;
  private _timer = -1; // This is the timer, it will go from 2000 to -1
  private _timerID = null;

  constructor(private _loadingController: LoadingController) {
    // console.log('Inicializo el spinner');
    this.createSpinner();
  }

  private async createSpinner() {
    this._currentLoading = await this._loadingController.create({
      showBackdrop: false,
      cssClass: 'spinner-class',
      spinner: null,
      translucent: true,
    } as LoadingOptions);
  }

  public async showSpinner() {
    // console.log('Muestro el spinner', this._currentLoading);
    if (this._isSpinnerShowing === false) {
      this._currentLoading.present();
      this._isSpinnerShowing = this.startTimer();
    }
  }

  private startTimer() {
    // console.log('Inicializo el conteo');
    this._timer = 2000;

    this._timerID = setInterval(() => {
      this._timer = this._timer - 1;

      if (this._timer < 0) {
        // console.log('El conteo se acabó.');
        this._isGoingToClose = true;
        clearInterval(this._timerID);
      }
    }, 1);

    return true;
  }

  public async hideSpinner() {
    // console.log('Intento ocultar el spinner con el timer en', this._timer);

    if (this._isSpinnerShowing) {
      if (this._timer < 0) {
        // console.log('El tiempo acabó y oculto el spinner');
        this._isSpinnerShowing = this.stopAndReplaceSpinner();
        this._isGoingToClose = false;
      } else {
        // console.log('El tiempo NO acabó y hago un timeout para acabarlo en', this._timer);
        clearInterval(this._timerID);
        setTimeout(() => {
          this._isGoingToClose = true;
          this.hideSpinner();
        }, this._timer);
      }

      this._timer = -1;
    }
  }

  private stopAndReplaceSpinner() {
    this._currentLoading.dismiss();
    this.createSpinner();
    return false;
  }
}

