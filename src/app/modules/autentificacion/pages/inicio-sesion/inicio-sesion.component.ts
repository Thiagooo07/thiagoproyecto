import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  hide = true;

  //IMPORTACION DEL MODELO / INTERFAZ
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  //CREAR UNA COLECCION PARA USUARIOS
  coleccionUsuarios: Usuario[] = [];

  //FUNCION PARA EL REGISTRO
  registrar() {
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password,
    }

    for (let i = 0; i < this.coleccionUsuarios.length; i++) {
      const usuario = this.coleccionUsuarios[i];
      if (usuario.nombre === credenciales.nombre &&
        usuario.apellido === credenciales.apellido &&
        usuario.email === credenciales.email &&
        usuario.rol === credenciales.rol &&
        usuario.password === credenciales.password 
    ){
      alert("iniciaste sesion correctamente :)");
      //paramos la funcion
      break;
      }else{
        alert("no se pudo iniciar sesion:( ");
        break;
      }
    }
    // enviamos los nuevos registros por medio del metodo push a la coleccion
    this.coleccionUsuarios.push(credenciales);
    console.log(credenciales)

  }

}
