import {Router} from 'express'
import { hola, nombreA, persona } from '../controllers/piezas.controller';
// Aqui lo inicializo lo que traje deconstruido
const router = Router();

// Gets
router.get('/api/hola',)

router.get('/api/:nombre/:apellido', nombreA )
// POSTS
router.post('/api/persona', persona)


// router.put()
// router.delete()

export default router