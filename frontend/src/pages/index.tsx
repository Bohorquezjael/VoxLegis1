import React from "react";
import Link from 'next/link'
import Header from "@app/components/header";
import { CandidActors } from "@app/canisters";

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
          <Link href="/perfil1" className="block px-4 py-2 text-white hover:bg-orange-600">Perfil</Link>
        </nav>
        <div className="p-4">
          <p className="text-sm">Made with love by VoxLegis</p>
        </div>
      </div>
      
      

        <div className="flex-1 bg-orange-50 p-8">

        </div>
      </div>
        
    );
  };
