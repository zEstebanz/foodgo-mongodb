import mongoose, { mongo } from "mongoose";
const { MONGODB_URI } = process.env
if (!MONGODB_URI) {
    throw new Error("MONGOB_URI must be defined")
}
export const connectDB = async () => {
    //connection es la respuesta a la conexion
    const { connection } = await mongoose.connect(MONGODB_URI)

    try {
        if (connection.readyState === 1) {
            console.log("MongoDB connected")
            return Promise.resolve(true)
        }
    } catch (error) {
        console.log(error);
        return Promise.reject(false);
    }
}; 