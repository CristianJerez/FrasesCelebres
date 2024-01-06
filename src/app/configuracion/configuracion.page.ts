import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServicioService } from '../servicio/servicio.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackCircleSharp } from 'ionicons/icons'


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfiguracionPage implements OnInit {

  fraseInicio: boolean = true

  constructor(
    private servicioService: ServicioService, private router: Router
  ) {
    addIcons({ arrowBackCircleSharp })
  }

  async ngOnInit() {
    this.fraseInicio = this.servicioService.getPreference()
  }

  async switch() {
    this.fraseInicio = !this.fraseInicio
    this.servicioService.setPreference(this.fraseInicio)
  }

}

