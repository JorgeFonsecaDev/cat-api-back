import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuario.service';

const usuarioService = new UsuarioService();

export class UsuarioController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const usuario = await usuarioService.registrar(req.query as any);
      res.status(201).json({ message: 'Usuario registrado', usuario });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.query as { username: string; password: string };
      const usuario = await usuarioService.login(username, password);
      res.status(200).json(usuario);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
}