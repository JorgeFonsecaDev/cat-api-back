import { Schema, model, Document, Types } from 'mongoose';

export interface IUsuario extends Document {
    _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
}

const UsuarioSchema = new Schema<IUsuario>({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

export const UsuarioModel = model<IUsuario>('Usuario', UsuarioSchema);