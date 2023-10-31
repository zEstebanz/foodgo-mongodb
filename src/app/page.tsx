import Link from "next/link";
import { getServerSession } from 'next-auth';

async function HomePage() {

  const session = await getServerSession()

  return (
    <section className="p-8">
      <h1 className="backgroundCover textCenter font-mont mb-5 font-bold">Food<span className="span">Go</span></h1>

      <div className="text-white container mx-auto text-center backgroundCover">

        {session ? (
          <>
            <section className="text-center p-8">
              <h2 className="text-3xl font-semibold mb-5">Welcome to FoodGo</h2>
              {/* <p className="text-lg">En Pixel Arcade, te ofrecemos una amplia selección de videojuegos emocionantes. ¡Sumérgete en el mundo de la diversión y la aventura!</p> */}
              {/* <p className="text-lg">Explora nuestras diferentes categorías de juegos</p> */}

              <Link href="/tienda" className="buttonCustom block py-2 pl-3 pr-4 text-white rounded">Tienda</Link>

              <p className="text-lg p-4"></p>
              <Link href="/registerProduct" className="buttonCustom2 block py-2 pl-3 pr-4 text-white rounded">Crear Producto</Link>

              {/* <p className="text-lg">También queremos recordarte que puedes registrarte en nuestro sistema para solicitar turnos en nuestro local de videojuegos. ¡Aprovecha al máximo tu experiencia en Pixel Arcade!</p> */}
            </section>
          </>
        ) : (
          <>
            <section className="text-center p-8">
              <h2 className="text-3xl font-semibold">Welcome to FoodGo</h2>


              <p className="mt-4 text-lg">¿Eres Nuevo? Registrate aquí</p>
              <Link href="/register" className="buttonCustom block py-2 pl-3 pr-4 text-white rounded">Crear Cuenta</Link>

              <p className="text-lg">¿Ya tienes una cuenta? Inicia Sesión aquí</p>
              <Link href="/login" className="buttonCustom2 block py-2 pl-3 pr-4 text-white rounded">Iniciar Sesión</Link>


              <p className="text-lg">Productos de la Tienda</p>
              <Link href="/tienda" className="buttonCustom block py-2 pl-3 pr-4 text-white rounded">Ver Tienda</Link>
        
            </section>
          </>
        )}

      </div>
    </section>
  )
}

export default HomePage;