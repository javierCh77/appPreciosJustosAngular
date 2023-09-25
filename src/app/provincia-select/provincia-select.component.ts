import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ProvinciasService } from '../service/provincias.service';
import { Router } from '@angular/router';

export interface Provincia {
  id: number;
  nombre: string;
  url:string;
}

@Component({
  selector: 'app-provincia-select',
  templateUrl: './provincia-select.component.html',
  styleUrls: ['./provincia-select.component.css'],
})


export class ProvinciaSelectComponent {
  
  constructor(private ProvinciaService: ProvinciasService,private router:Router) {
    this.ProvinciaService.getProvincias().subscribe((data: any) => {
      
      this.provincia = data;
    });
  }
  provincia: Provincia[] = [];

  provinciaSeleccionada: Provincia = {
    nombre: '',
    id: 0,
    url:'',
  };
  
  mostrar(){
    this.router.navigateByUrl(`/provincias/${this.provinciaSeleccionada.url}/productos`)
  }
  
  
  
  ngOnInit():void{}

}


