import { Router } from "express";
import {getUsuarios,getUsuarioByUserAndPassword} from '../controllers/usuario.controllers.js'

const router = Router()

router.get('/listaUsuarios', getUsuarios)
router.get('/sigIn', getUsuarioByUserAndPassword)

export default router;