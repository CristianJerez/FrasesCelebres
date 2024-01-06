import { Injectable } from '@angular/core';
import { Frases } from '../modelo/frase'
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private _frases: Frases[] = [
    new Frases(1, "Lo que doy, me lo doy. Lo que no doy, me lo quito. Nada para mí que no sea para los otros.", "Alejandro Jodorowsky"),
    new Frases(2, "La perfección se logra no cuando no hay nada más que añadir, sino cuando no hay nada más que quitar. ", "Antoine de Saint-Exupéry"),
    new Frases(3, "No cuentes los días, haz que los días cuenten.", "Muhamed Alí"),
    new Frases(4, "Se necesitan dos años para aprender a hablar, y sesenta para aprender a callar.", "Ernest Hemingway"),
    new Frases(5, "Nunca sabes lo fuerte que eres, hasta que ser fuerte es la única opción que te queda.", "Bob Marley")
  ]

  MostrarFraseInicio: boolean = true

  constructor() { }

  agregarFrase(f: Frases) {
    this._frases.push(f)
  }

  mostrarFrase(): Frases[] {
    return this._frases
  }

  borrarFrases(frasesID: number) {
    this._frases = this._frases.filter((frase) => {
      return frase.ID !== frasesID
    })
  }

  MostrarFraseRandom() {
    return this._frases[Math.floor(Math.random() * this._frases.length)]
  }

  async setPreference(preferencia: boolean) {
    this.MostrarFraseInicio = preferencia
    await Preferences.set({
      key: 'configuracion',
      value: JSON.stringify(this.MostrarFraseInicio)
    })
  }

  async getValuePreference() {
    const configstr: string | null = (await Preferences.get({ key: 'configuracion' })).value
    this.MostrarFraseInicio = configstr != null ? JSON.parse(configstr) : this.MostrarFraseInicio
    console.log(this.MostrarFraseInicio.toString())
  }

  getPreference() {
    return this.MostrarFraseInicio
  }

}