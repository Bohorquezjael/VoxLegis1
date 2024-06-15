import React from "react";
import Link from 'next/link'

export default function Notificaciones(){

    return (   
      <div className="flex h-screen">
        
            <div className="w-64 bg-orange-500 text-white flex flex-col">
        <div className="flex items-center justify-center h-16 shadow-md">
          <img src="logo.png" alt="Logo" className="h-8" />
          <span className="ml-2 text-xl font-bold">VoxLegis</span>
        </div>
        <nav className="flex-grow mt-10">
          <Link href="/pages" className="block px-4 py-2 text-white hover:bg-orange-600">Home</Link>
          <Link href="/explorar" className="block px-4 py-2 text-white hover:bg-orange-600">Explorar</Link>
          <Link href="/notificaciones" className="block px-4 py-2 text-white hover:bg-orange-600">Notificaciones</Link>
          <Link href="/perfilCiudadano" className="block px-4 py-2 text-white hover:bg-orange-600">Perfil</Link>
        </nav>
        <div className="p-4">
          <p className="text-sm">Made with love by VoxLegis</p>
        </div>
      </div>
      
      <div className="flex-1 bg-orange-50 p-5 pl-5" >
          <div className=" justify-center items-center">
            <div className="bg-white shadow-md rounded-lg p-6 w-4/5">
              <div className="flex">
                <div className="ml-8 w-1/4 ">
                  <a href="http://sil.gobernacion.gob.mx/Librerias/pp_PerfilLegislador.php?SID=&Referencia=9227304"><img src="usuario.jpg" alt="Profile" className="rounded-full object-cover" /></a>
                </div>
                <div className=" w-3/4">
                  <h2 className="text-2xl font-bold mb-4">Que adiciona diversas disposiciones al Código Civil Federal, en materia de arrendamiento de corto plazo.</h2>
                  <h4>Yerico Abramo Masso</h4>
                </div>
              </div><br />
              <div className="mb-4">
                Se propone regular el arrendamiento de corto plazo de inmuebles, definido como aquel que dura menos de 28 días y se realiza a través de plataformas digitales. Introduce impuestos específicos, exige a los inmuebles una aprobación de protección civil por limitaciones de tiempo, requiere cámaras de seguridad externas, limita a tres el número de arrendamientos por propietario por municipio, y permite a propietarios que viven en el inmueble arrendar una parte sin restricciones.</div>
            </div>
          </div>
        </div>
      

        <div className="flex-1 bg-orange-50 p-8">

        </div>
      </div>
        
    );
  };

