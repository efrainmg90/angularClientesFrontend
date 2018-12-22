import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import  Swal  from "sweetalert2";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  constructor(private clienteService:ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(data=>{
      this.clientes = data;
    });
  }

  delete(cliente: Cliente):void{
    const swalWithBootstrapButtons = Swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons({
      title: '¿Esta seguro?',
      text: `¿Desea elimar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.clienteService.delete(cliente.id).subscribe(res=>{
          this.clientes = this.clientes.filter(cli=>cli!== cliente);
          swalWithBootstrapButtons(
            'Cliente eliminado!',
            `${cliente.nombre} ${cliente.apellido} eliminado exitosamente!`,
            'success'
          )
        });
      }
    })
  }

}