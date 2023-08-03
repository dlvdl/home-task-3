import express, { Router } from 'express'
import { getNotes } from '../controllers/notes.js'

const router: Router = express.Router()
router.route('/').get(getNotes)

export { router }
