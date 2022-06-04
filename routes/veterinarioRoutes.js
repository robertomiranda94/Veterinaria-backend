import  express, { Router }  from "express";
import { registrar,perfil,confirmar,autenticar,olvidePassword,comprobarToken,nuevoPassword,actualizarPerfilDef,actualizarPassword } from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";


const router = express.Router();

//area publica
router.post('/',registrar);
router.get('/confirmar/:token',confirmar);
router.post('/login',autenticar);
router.post('/olvide-password',olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)

//area privada
router.get('/perfil',checkAuth,perfil);
router.put('/perfil/:id',checkAuth,actualizarPerfilDef)
router.put('/actualizar-password',checkAuth,actualizarPassword)


export default router;