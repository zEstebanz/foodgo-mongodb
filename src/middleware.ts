export { default } from "next-auth/middleware";

//configuracion, donde tiene un valor que contiene las rutas protegidas.
// ":path*" (proteje todas las rutas que esten dentro de ...)
export const config = {
    matcher: ['/dashboard/:path*', '/registerProduct/:path*','/registerProduct/:path*', '/tienda/product']
}