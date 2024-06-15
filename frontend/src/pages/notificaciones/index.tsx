import React from "react";
import Link from 'next/link'

export default function Notificaciones() {

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
          <Link href="/perfil1" className="block px-4 py-2 text-white hover:bg-orange-600">Perfil</Link>
        </nav>
        <div className="p-4">
          <p className="text-sm">Made with love by VoxLegis</p>
        </div>
      </div>
      <div className="flex-1 bg-orange-50 p-8">


        <div className="flex justify-start items-center">
          <div className="bg-white shadow-md rounded-lg p-4 w-full h-min">
          <div className="items-center">
            <img src="usuario.jpg" alt="Profile" className="w-12 h-12 rounded-full object-cover " />
          </div>
            <h2 className="text-2xl font-bold h-6 mb-3">Nuevo Comentario</h2>
            <div className="mb-4">
              <strong>Alguien ha comentado una publicacion que sigues</strong>
            </div>
          </div>
        </div>


        <div className="flex justify-start items-center mt-3">
          <div className="bg-white shadow-md rounded-lg p-4 w-full h-min">
          <div className="items-center">
            <img src="http://sil.gobernacion.gob.mx/Archivos/Fotos/1345.jpg" alt="Profile" className="w-12 h-12 rounded-full object-cover " />
          </div>
            <h2 className="text-2xl font-bold h-6 mb-3">Nueva Iniciativa</h2>
            <div className="mb-4">
              <strong>La senadora Leticia Burgos Ochoa a la que sigues ha publicado una nueva iniciativa</strong>
            </div>
          </div>
        </div>

        <div className="flex justify-start items-center mt-3">
          <div className="bg-white shadow-md rounded-lg p-4 w-full h-min">
          <div className="items-center">
            <img src="usuario.jpg" alt="Profile" className="w-12 h-12 rounded-full object-cover " />
          </div>
            <h2 className="text-2xl font-bold h-6 mb-3">Nuevo Like</h2>
            <div className="mb-4">
              <strong>Alguien le ha dado like a una publicacion que sigues</strong>
            </div>
          </div>
        </div>


      </div>
    </div>

  );
};

