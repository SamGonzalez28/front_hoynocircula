import { Component, Input, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  restricciones: any[] = [];
  autos: any[] = [];
  restriccion = {
    id: null,
    lunes: null,
    martes: null,
    miercoles: null,
    jueves: null,
    viernes: null,
    sabado: null,
    domingo: null,
    hora_inicia: null,
    hora_fin: 'null',
  };
  auto = {
    id: null,
    placa: '',
    chasis: '',
    color: '',
    discapacidad: false,
  };
  busqueda = {
    placa: '',
    fecha: null,
    mensaje: '',
  };

  // popup = document.querySelector('.popup');
  @Input() popup : string ='active';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.appService.getAll().subscribe((data: any) => (this.autos = data));
    //this.appService.getAll().subscribe((data: any) => (this.autos = data));
  }

  saveAuto() {
    this.appService.createAuto(this.auto).subscribe(() => this.getAll());

    this.auto = {
      id: null,
      placa: '',
      chasis: '',
      color: '',
      discapacidad: false,
    };
  }

  buscarAuto() {
    this.appService.buscarAuto(this.busqueda).subscribe((bus:any) => {
      this.getAll();
      this.busqueda=bus;
      console.log(bus);

      this.abrirPopup();
    });
  }

  edit(auto: any) {
    this.auto = {
      ...auto,
    };
  }

  delete(auto: any) {
    this.appService.delete(auto.id).subscribe(() => this.getAll());
  }

  cerrarPopup() {
    this.popup = `popup`;
  }

  abrirPopup() {
    this.popup = `popup active`;
  }
  // save() {
  //   if (this.tarea.id) {
  //     this.appService.update(this.tarea.id!, this.tarea).subscribe(() => this.getAll());
  //   } else {
  //     this.appService.create(this.tarea).subscribe(() => this.getAll());
  //   }
  //   this.tarea = {
  //     id: null,
  //     nombre: '',
  //     completado: false,
  //   };
  // }
}
