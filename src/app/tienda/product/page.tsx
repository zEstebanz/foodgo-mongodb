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
        <section className='h-screen'>
            <div className="backgroundCover container mx-auto p-4">
                <div className="flex flex-col md:flex-row">
                    {/* Lado izquierdo: Imagen */}

                    <div className="md:w-1/2">
                        <img src={imagen} className="w-full h-auto" />
                    </div>

                    {/* Lado derecho: Datos */}
                    <div className="md:w-1/2 p-4 text-white">
                        <h1 className="text-3xl font-bold">{titulo}</h1>
                        <p className="text-xl mt-2">${precio}</p>
                        <p className="text-xl mt-2">{descripcion}</p>

                        <button className="buttonCustom text-white py-2 px-4 rounded-full mt-4 inline-block">
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Product;