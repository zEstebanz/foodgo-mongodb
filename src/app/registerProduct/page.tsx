"use client";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Productos() {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const productoResponse = await axios.post("/api/auth/producto", {
        titulo: formData.get("titulo"),
        imgUrl: formData.get("imgUrl"),
        precio: formData.get("precio"),
        descripcion: formData.get("descripcion"),
      });
      console.log(productoResponse);
      router.push('/tienda'); // Redirige a la ruta '/dashboard'

    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  };

  return (
    <section className="p-8">
      <h1 className="text-center text-white text-6xl text-white font-bold">Crear Productos</h1>
      <div className="flex justify-center items-center p-4">
        <form onSubmit={handleSubmit} className="backgroundCover px-4 py-6 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/3">
          {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        
          <label className="text-slate-300">Titulo:</label>
          <input
            type="text"
            id="titulo"
            placeholder="Titulo del Producto"
            className="text-white bg-zinc-800 px-2 py-1 block w-full mb-2"
            name="titulo"
            required
          />

          <label className="text-slate-300">Imagen URL</label>
          <input
            type="text"
            id="imgUrl"
            className="text-white bg-zinc-800 px-2 py-1 block w-full mb-2"
            name="imgUrl"
            required
          />

          <label className="text-slate-300">Precio:</label>
          <input
            type="number"
            id="precio"
            placeholder="Precio del Producto"
            className="text-white bg-zinc-800 px-2 py-1 block w-full mb-2"
            name="precio"
            required
          />

          <label className="text-slate-300">Descripción:</label>
          <textarea
            id="descripcion"
            placeholder="Descripción del Producto"
            className="text-white bg-zinc-800 px-2 py-1 block w-full mb-2"
            name="descripcion"
            required
          />

          <button className="buttonCustom text-white px-2 py-1 mt-4 block w-full">
            Subir Producto
          </button>

        </form>


      </div>
    </section>
  );
}

export default Productos;