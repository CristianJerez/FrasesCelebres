import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { Frases } from 'src/app/modelo/frase';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons'

@Component({
  selector: 'app-frase-lista',
  templateUrl: './frase-lista.component.html',
  styleUrls: ['./frase-lista.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class FraseListaComponent  implements OnInit {

  listaCitas:Frases [] = []
  @Output() notificaEliminacion: EventEmitter<string> = new EventEmitter();

  constructor(
    private servicioService: ServicioService
  ) { 
    addIcons ({ trash })
  }

  ngOnInit() {
    this.ionViewWillEnter()
  }

  borrarFrase(idNumber: number){

    this.servicioService.borrarFrases(idNumber)
    this.ionViewWillEnter()
    this.notificar()
  }

  ionViewWillEnter(){
    this.listaCitas = this.servicioService.mostrarFrase()
  }

  notificar(){
    const mensaje:string = "¡Su frase se ha eliminado correctamente!"
    this.notificaEliminacion.emit(mensaje)
  }
}
