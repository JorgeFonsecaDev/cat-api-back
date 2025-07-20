import { UsuarioModel } from '../models/usuario.model';
import bcrypt from 'bcryptjs';
//import { UsuarioDTO, UsuarioPublico } from '../interfaces/usuario.interface';
import { UsuarioDTO, UsuarioPublico } from '../interfaces/cat-api/usuario.interface';

export class UsuarioService {
  async registrar(dto: UsuarioDTO): Promise<UsuarioPublico> {
    const existente = await UsuarioModel.findOne({ username: dto.username });
    if (existente) throw new Error('El usuario ya existe');

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const nuevoUsuario = new UsuarioModel({
      username: dto.username,
      email: dto.email,
      password: hashedPassword
    });

    const usuarioGuardado = await nuevoUsuario.save();

    return {
      id: usuarioGuardado._id.toString(),
      username: usuarioGuardado.username,
      email: usuarioGuardado.email
    };
  }

  async login(username: string, password: string): Promise<UsuarioPublico> {
    const usuario = await UsuarioModel.findOne({ username });
    if (!usuario) throw new Error('Usuario no encontrado');

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) throw new Error('Contraseña incorrecta');

    return {
      id: usuario._id.toString(),
      username: usuario.username,
      email: usuario.email
    };
  }
}