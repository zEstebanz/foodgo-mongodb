// models/turno.js

import mongoose from 'mongoose';

const ProductoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  precio: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Producto || mongoose.model('Producto', ProductoSchema);