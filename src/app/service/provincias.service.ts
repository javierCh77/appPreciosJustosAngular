import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  private ruta:string = './assets/api/';

  constructor(private http: HttpClient) { }
  
  getProvincias(){
    return this.http.get(`${this.ruta}provincias.json`).pipe(
      map((data:any) => {
        let respuesta = data.map ((provincia:any) => {
          return {
            nombre:provincia.nombre,
            id:provincia.id,
            url:provincia.api,
          };
        });
        return respuesta;
      })
    );
  }
  

  
}
