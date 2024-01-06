import { Component, OnInit } from '@angular/core';
import { FraseCelebreComponent } from '../componente/frase-celebre/frase-celebre.component';
import { addIcons } from 'ionicons';
import { addOutline, settings} from 'ionicons/icons'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FraseCelebreComponent, CommonModule, FormsModule, IonicModule],
})
export class HomePage implements OnInit {

  estadoSwitch:boolean = true

  constructor(
    private router: Router, private servicioService: ServicioService) {
    addIcons({addOutline, settings})
  }

  ngOnInit() {
    this.ionViewWillEnter()
  }

  IrGestionCitas() {
    this.router.navigate(['/gestion-citas']);
  }

  irConfiguracion(){
    this.router.navigate(['/configuracion'])
  }

  ionViewWillEnter(){
    this.estadoSwitch = this.servicioService.MostrarFraseInicio
  }
}
