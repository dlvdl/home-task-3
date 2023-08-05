import express, { Router } from 'express'
import { param, body } from 'express-validator'
import { getNotes, getNote, createNote, deleteNote, editNote, getStats } from '../controllers/notes.js'
import { validate } from '../middleware/validation.js'
import { testID } from '../validation/testID.js'
import { testCategory } from '../validation/testCategory.js'

const router: Router = express.Router()
router.route('/stats').get(getStats)
router
  .route('/')
  .get(getNotes)
  .post(
    validate([
      body('content').exists().withMessage('Content is required'),
      body('name').exists().withMessage('Name is required').isString().withMessage('Name should be a string'),
      body('category')
        .exists()
        .withMessage('Category is required')
        .custom(testCategory())
        .withMessage('Given category doesn`t exist'),
    ]),
    createNote,
  )
router
  .route('/:id')
  .get(validate([param('id').exists().isInt().custom(testID()).withMessage('There isn`t note with such id')]), getNote)
  .delete(
    validate([param('id').exists().toInt().custom(testID()).withMessage('There isn`t note with such id')]),
    deleteNote,
  )
  .patch(
    validate([
      param('id').exists().isInt().custom(testID()).withMessage('There isn`t note with such id'),
      body('content').optional().isString(),
      body('archived').optional().isBoolean(),
      body('name').optional().isString(),
      body('category').optional().custom(testCategory()).withMessage('Given category doesn`t exist'),
    ]),
    editNote,
  )

export { router }
