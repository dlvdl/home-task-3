import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { notes } from '../data/data.js'
import { findNote, deleteOneNote, editOneNote, newData } from '../services/index.js'

let todos = notes

const getNotes = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodes.OK).json(todos)
}

const getNote = async (req: Request, res: Response): Promise<void> => {
  const id: number = Number(req.params.id)
  const result = findNote({ data: todos, key: id })
  res.status(StatusCodes.OK).json({ msg: 'one note', result })
}

const deleteNote = async (req: Request, res: Response): Promise<void> => {
  const id: number = Number(req.params.id)
  todos = deleteOneNote({ data: todos, key: id })
  res.status(StatusCodes.OK).json({ msg: 'delete one note' })
}

const createNote = async (req: Request, res: Response): Promise<void> => {
  res.sendStatus(StatusCodes.OK).json({ msg: 'create one note' })
}

const editNote = async (req: Request, res: Response): Promise<void> => {
  const id: number = Number(req.params.id)
  const { category, archived, content }: newData = req.body

  todos = editOneNote({ data: todos, key: id, newData: { archived, content, category } })
  res.status(StatusCodes.OK).json({ msg: 'edit one note' })
}

const getStats = async (req: Request, res: Response): Promise<void> => {
  res.send(StatusCodes.OK).json({ msg: 'agregated stat' })
}

export { getNotes, getNote, deleteNote, createNote, editNote, getStats }
