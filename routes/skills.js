import { Router } from 'express'
const router = Router()
import * as skillsCtrl from '../controllers/skills.js'

/* GET users listing. */
router.get('/', skillsCtrl.index) 
router.get('/:id', skillsCtrl.show)


export {
  router
}
