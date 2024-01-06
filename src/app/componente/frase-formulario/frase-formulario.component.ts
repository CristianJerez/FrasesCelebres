import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { Frases } from 'src/app/modelo/frase';

@Component({
  selector: 'app-frase-formulario',
  templateUrl: './frase-formulario.component.html',
  styleUrls: ['./frase-formulario.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class FraseFormularioComponent implements OnInit {

  incorporaFrase: any
  incorporaAutor: any
  @Output() notificaEvento: EventEmitter<string> = new EventEmitter();

  constructor(
    private servicioService: ServicioService,
  ) { }

  ngOnInit() { }

  guardarFrase() {

    var listaFrases = this.servicioService.mostrarFrase
    var frase = new Frases(listaFrases.length + 1, this.incorporaFrase, this.incorporaAutor)
    this.servicioService.agregarFrase(frase)
    this.notificar()
  }

  notificar(){
    const mensaje:string = "¡Su frase se ha guardado correctamente!"
    this.notificaEvento.emit(mensaje)
  }


}
