import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import ProductoModel from '@/models/producto';

export const POST = async (req, res) => {
    await connectDB();

    try {
        const body = await req.json();
        const newTurno = await ProductoModel.create(body);

        return NextResponse.json({ data: newTurno }, { status: 200 });
    } catch (error) {
        console.error('Error al crear el turno:', error);

        return NextResponse.json({ data: null }, { status: 500 });
    }
};


export const GET = async (req, res) => {
    await connectDB();

    try {
        // Realiza una consulta para obtener todos los blog
        const blog = await ProductoModel.find();

        // Devuelve los blog en la respuesta
        return NextResponse.json({ data: blog }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 });
    }
}

export const PUT = async (req, res) => {
    await connectDB();

    try {
        const { id } = req.query;
        const turno = await ProductoModel.findById(id);

        if (!turno) {
            return NextResponse.json({ data: null, message: 'Turno no encontrado' }, { status: 404 });
        }

        // Elimina el turno
        await turno.remove();

        return NextResponse.json({ data: turno, message: 'Turno eliminado' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ data: null, message: 'Error al eliminar el turno' }, { status: 500 });
    }
};



// export const POST = async (request: Request) =>{
//     await connectDB()
//     try {
//         const body = await request.json()
//         const newTurno = await ProductoModel.create(body)
//         return NextResponse.json({data:newTurno}, {status:200})
//     } catch (error) {
//         return NextResponse.json({data: null}, {status:500})
//     }
// }