import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Router, ActivatedRoute } from '@angular/router';
import  swal  from "sweetalert2";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  titulo:string;
  cliente:Cliente = new Cliente();
  constructor(private clienteService:ClienteService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id'];
      if(id)
        this.clienteService.getCliente(id).subscribe(cliente=>{
          this.cliente = cliente;
        });
    });
  }

  create(){
    this.clienteService.create(this.cliente).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/clientes']);
      swal('Nuevo cliente',`Cliente ${res.nombre} creado con exito`,'success');
    });
  }

  update(){
    this.clienteService.update(this.cliente).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/clientes']);
      swal('Cliente Actualizado',`Cliente ${res.nombre} actualizado con exito`,'success');
    });
  }

}
