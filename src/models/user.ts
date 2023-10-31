import { Schema, model, models } from "mongoose";
//Schema nos define los datos que deseamos guardar en la BD.
//model para poder interactuar con la abse de datos, CRUD.
//models para mostrar todos los models definidos,
const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "El Email es requerido"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "El Email es invalido",
      ],
    },
    password: {
      type: String,
      required: [true, "El Password es requerido"],
      select: false,
    },
    fullname: {
      type: String,
      required: [true, "El nombre completo es requerido"],
      minLength: [3, "El nombre completo debe tener al menos 3 caracteres"],
      maxLength: [20, "El nombre completo debe tener como máximo 20 caracteres."],
    },
  },
  {
    timestamps: true,
  }
);

//crear un modelo llamado USER , asi se llamara la coleccion en mongoDB, y no tengo que llamarla siempre.
//si no exite creara uno nuevo
const User = models.User || model("User", UserSchema);
export default User;