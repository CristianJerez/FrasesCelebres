import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FraseListaComponent } from '../componente/frase-lista/frase-lista.component';
import { FraseFormularioComponent } from '../componente/frase-formulario/frase-formulario.component';
import { ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FraseListaComponent, FraseFormularioComponent]
})
export class GestionCitasPage implements OnInit {
  

  constructor( private toastController:ToastController) { }

  ngOnInit() {
  }

  async recibeNotificacion(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
      color: "success"
    });
    toast.present();
  }

  async recibeEliminacion(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
      color: "danger",    
    });
    toast.present();
  }
}
