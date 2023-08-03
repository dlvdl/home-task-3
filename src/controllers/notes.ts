import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { notes } from '../data/data.js'

const getNotes = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodes.OK).json(notes)
}

const getNote = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id
  console.log(id)
  res.status(StatusCodes.OK).json({ msg: 'one note' })
}

const deleteNote = async (req: Request, res: Response): Promise<void> => {
  res.send(StatusCodes.OK).json({ msg: 'delete one note' })
}

const createNote = async (req: Request, res: Response): Promise<void> => {
  res.send(StatusCodes.OK).json({ msg: 'create one note' })
}

const editNote = async (req: Request, res: Response): Promise<void> => {
  res.send(StatusCodes.OK).json({ msg: 'edit one note' })
}

const getStats = async (req: Request, res: Response): Promise<void> => {
  res.send(StatusCodes.OK).json({ msg: 'agregated stat' })
}

export { getNotes, getNote, deleteNote, createNote, editNote, getStats }
