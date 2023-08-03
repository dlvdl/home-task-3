import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { notes } from '../data/data.js'

const getNotes = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodes.OK).json(notes)
}

export { getNotes }
