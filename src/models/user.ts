import { Schema, model, models } from "mongoose";
//Schema nos define los datos que deseamos guardar en la BD.
//model para poder interactuar con la abse de datos, CRUD.
//models para mostrar todos los models definidos,
const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    fullname: {
      type: String,
      required: [true, "fullname is required"],
      minLength: [3, "fullname must be at least 3 characters"],
      maxLength: [20, "fullname must be at most 20 characters"],
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