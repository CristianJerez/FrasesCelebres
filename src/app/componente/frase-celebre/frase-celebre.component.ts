import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-frase-celebre',
  templateUrl: './frase-celebre.component.html',
  styleUrls: ['./frase-celebre.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class FraseCelebreComponent implements OnInit {

  fraseCelebre: string = ""
  autorCelebre: string = ""
  @Input() muestraFrase:boolean = true

  constructor(

    private servicioService: ServicioService
  ) {
  }
  ngOnInit(): void {
    this.ionViewWillEnter()

  }

  ionViewWillEnter(){
    var _frase = this.servicioService.MostrarFraseRandom()
    this.fraseCelebre = _frase.cita
    this.autorCelebre = _frase.autor
    //this.muestraFrase = this.servicioService.MostrarFraseInicio
  }
}
