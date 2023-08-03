import express, { Router } from 'express'
import { getNotes, getNote, createNote, deleteNote, editNote, getStats } from '../controllers/notes.js'

const router: Router = express.Router()
router.route('/').get(getNotes).post(createNote)
router.route('/:id').get(getNote).delete(deleteNote).patch(editNote)
router.route('/stats').get(getStats)

export { router }
