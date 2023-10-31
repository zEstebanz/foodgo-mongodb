import { connectDB } from '@/libs/mongodb';
import ProductoModel from '@/models/producto';

async function loadTurno() {
    try {
        await connectDB();
        const mostrarProducto = await ProductoModel.find();
        return mostrarProducto;
    } catch (error) {
        console.error('Error al cargar los turnos:', error);
        return [];
    }
}

async function Producto() {

    const mostrarProducto = await loadTurno();

    const producto = mostrarProducto.map((producto) => ({
        title: producto.titulo, // Asegúrate de usar el nombre correcto de la propiedad en la base de datos
        url: producto.url,
        imagen: producto.imgUrl,
        precio: producto.precio,
        descripcion: producto.descripcion,
    }));

    return (
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {producto.map((producto, index) => (
                    <div key={index} className="h-100 backgroundCover text-white p-4 rounded-lg shadow-lg">
                        <h1 className="titleProduct text-center font-bold">{producto.title}</h1>
                        <a href={`/tienda/product?title=${encodeURIComponent(producto.title)}&precio=${encodeURIComponent(producto.precio)}&descripcion=${encodeURIComponent(producto.descripcion)}&imagen=${encodeURIComponent(producto.imagen)}`}
                       
                       >
                            <img
                                src={producto.imagen}
                                className="w-full h-60 object rounded-lg object-cover"
                            />
                        </a>
                        <div className="card-body mt-3">
                            <h3 className="text-3xl font-bold text-center">${producto.precio}</h3>
                            <a
                                href={`/tienda/product?title=${encodeURIComponent(producto.title)}&precio=${encodeURIComponent(producto.precio)}&descripcion=${encodeURIComponent(producto.descripcion)}&imagen=${encodeURIComponent(producto.imagen)}`}
                                className="buttonCustom block py-2 mt-5 pl-3 pr-4 text-white text-center rounded"
                            >
                                Ver
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Producto;