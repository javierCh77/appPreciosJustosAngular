import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { ProvinciaSelectComponent } from '../provincia-select/provincia-select.component';
import { ActivatedRoute } from '@angular/router';

export interface Producto {
  ean:number;
  nombre:string;
  precio:number;
}



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})



export class ProductListComponent implements OnInit  {

  productos: Producto[] = [];
  provinciaSlctd:string =this.route.snapshot.params['id'];
  public cantprod:any;
  productosFiltrados: Producto[] = [];
  filtroTexto: string = "";
  filtroPrecio: number = 0;
  precioMaximo: number = 1000;

  constructor(private productoSrv:ProductoService,private route:ActivatedRoute) {
    productoSrv.getProductos(this.provinciaSlctd).subscribe((data:any) => {
    this.productos = data;
    this.productosFiltrados = data;
    this.cantprod= this.productosFiltrados.length;
    });
  } 

  onFiltroTextoChange(parametroIngresado: any) {
    this.productosFiltrados = this.productos.filter((producto) => {
      if (this.filtroPrecio != 0){
        // esto significa que el usuario ingreso filtro
        // tengo que filtrar por nombre y codigo y ademas por precio
        return (producto.nombre.toLowerCase().includes(parametroIngresado.toLowerCase())
            || (producto.ean + '').includes(parametroIngresado)) && producto.precio <= this.filtroPrecio;
      }
      else{
        // solo filtro por nombre y por codigo
        return producto.nombre.toLowerCase().includes(parametroIngresado.toLowerCase())
          || (producto.ean + '').includes(parametroIngresado);
      }
    });
  }
  onFiltroPrecioChange(parametroIngresado: any) {
    this.productosFiltrados = this.productos.filter((producto) => {
      if (this.filtroTexto != ""){
        return producto.precio <= parametroIngresado && (
          producto.nombre.toLowerCase().includes(this.filtroTexto.toLowerCase())
            || (producto.ean + '').includes(this.filtroTexto)
        )
      }
      else{
        return producto.precio <= parametroIngresado;
      }
    })
  }


  ngOnInit(): void {
    
  }
  
}
