"use client"
import { useEffect, useState } from 'react';

function Product() {
    const [titulo, setProductoTitulo] = useState('');
    const [precio, setProductoPrecio] = useState('');
    const [descripcion, setProductoDescripcion] = useState('');
    const [imagen, setProductoImagen] = useState('');


    useEffect(() => {
        // Acceder a la URL y otros parámetros de la página
        const queryParams = new URLSearchParams(window.location.search);
        const titulo = queryParams.get('title');
        const precio = queryParams.get('precio');
        const descripcion = queryParams.get('descripcion');
        const imagen = queryParams.get('imagen');

        if (titulo) {
            setProductoTitulo(titulo);
        }
        if (imagen) {
            setProductoImagen(imagen);
        }
        if (precio) {
            setProductoPrecio(precio);
        }
        if (descripcion) {
            setProductoDescripcion(descripcion);
        }

    }, []);

    return (
        <section>

            <div className="container mx-auto pt-8">
                <h1 className="backgroundCover textCenter font-mont mb-5 font-bold">Food<span className="span">Go</span></h1>

                <div className="flex flex-col md:flex-row p-6 rounded-lg shadow-md backgroundProduct">
                    {/* Lado izquierdo: Imagen */}
                    <div className="md:w-1/3 md:p-2">
                        <img src={imagen} className="w-full h-60 object rounded-lg object-cover" alt={titulo} />
                    </div>

                    {/* Lado derecho: Datos */}
                    <div className="md:w-2/3 p-4">
                        <h1 className="text-5xl font-semibold text-white">{titulo}</h1>
                        <p className="text-5xl mt-2 span font-semibold">${precio}</p>
                        <p className="text-2xl mt-2 text-gray-100">{descripcion}</p>

                        <button className="buttonCustom text-2xl font-semibold text-white py-2 px-4 mt-4">
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>


        </section>
    );
}
export default Product;