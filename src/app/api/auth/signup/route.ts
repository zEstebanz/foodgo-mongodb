import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongodb";
import brcypt from "bcryptjs";

// request recive informacion, un tipo de dato global que trae informacion.
export async function POST(request: Request) {

    //RECIBO EL DATO
    //request tiene u8n metodo json que tranforma la peticion, y body recibira los datos.
    const { fullname, email, password } = await request.json()
    console.log(fullname, email, password)

    // EXISTE EL PASSWORD O MAYOR A 6
    if (!password || password.lenght < 6) return NextResponse.json({
        message: "Password must be at least 6 characters"
    }), {
        status: 400
    }

    try {
        //conectamos a la base de datos:
        await connectDB()
        //SI ESTA REGISTRADO
        //confirmar si esta registrado:
        const userFound = await User.findOne({ email })
        if (userFound) return NextResponse.json({
            message: "Email already exists"
        }, {
            status: 409
        })

        //generar hash de la contraseña.
        const hashedPassword = await brcypt.hash(password, 12)

        //si no existe, crear uno nuevo:
        const user = new User({
            email,
            fullname,
            password: hashedPassword
        })
        //GUARDAR EN LA BASE DE DATOS
        const savedUser = await user.save()
        // console.log(savedUser)
        //RETORNA EL DATO AL CLIENTE
        return NextResponse.json({
            _id:savedUser._id,
            email:savedUser.email,
            fullname:savedUser.fullname,
        });
        
    } catch (error) {
        console.log(error)
        return NextResponse.error()
    }
}