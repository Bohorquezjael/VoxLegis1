import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Link from 'next/link';

export default function CreateProfileForm(){
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    };
  
    const handleBioChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setBio(event.target.value);
    };
  
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
  
      await onSubmit(username, bio);
      resetForm();
      setLoading(false);
    };
  
    const onSubmit = async (username: string, bio: string) => {
      // Simulate an API call
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('Profile created:', { username, bio });
          resolve();
        }, 2000);
      });
    };
  
    const resetForm = () => {
      setUsername("");
      setBio("");
    };
  
    return (    
      <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-orange-500 text-white flex flex-col">
        <div className="flex items-center justify-center h-16 shadow-md">
          <img src="logo.png" alt="Logo" className="h-8" />
          <span className="ml-2 text-xl font-bold">VoxLegis</span>
        </div>
        <nav className="flex-grow mt-10">
          <Link href="/home" className="block px-4 py-2 text-white hover:bg-orange-600">Home</Link>
          <Link href="/explorar" className="block px-4 py-2 text-white hover:bg-orange-600">Explorar</Link>
          <Link href="/notificaciones" className="block px-4 py-2 text-white hover:bg-orange-600">Notificaciones</Link>
          <Link href="/perfilCiudadano" className="block px-4 py-2 text-white hover:bg-orange-600">Perfil</Link>
        </nav>
        <div className="p-4">
          <p className="text-sm">Made with love by VoxLegis</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-orange-50 p-8">
      
      
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-md rounded-lg p-6 w-2/3">
          <div className="flex">
          <h2 className="text-2xl font-bold mb-4">User Name</h2>
          <button  className=" ml-auto bg-black text-white px-4 py-2 rounded">Editar</button>
          </div>
           
            <div className="mb-4">
              <strong>Edad:</strong> 25
            </div>
            <div className="mb-4">
              <strong>Nombre:</strong> John Doe <i>ciudadano</i>
            </div>
            <div className="mb-4">
              <strong>Bio:</strong> Una breve descripción de la persona para conocer su opinión como ciudadano.
            </div>
            <button  className="mb-4 bg-black text-white px-4 py-2 rounded">Historial de opiniones </button>
           
           
          </div>
          <div className="ml-8">
            <img src="usuario.jpg" alt="Profile" className="w-48 h-48 rounded-full object-cover" />
          </div>
        </div>
      </div>
    </div>
    );
  };
  
