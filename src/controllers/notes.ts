import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { notes, statistic } from '../data/data.js'
import {
  findNote,
  deleteOneNote,
  editOneNote,
  newData,
  createOneNote,
  computeAddedQuontity,
  computeDeletedQuontity,
  computeMostFrequent,
  computeSummary,
} from '../services/index.js'

export let todos = notes
const stat = statistic

const getNotes = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodes.OK).json({ result: todos })
}

const getNote = async (req: Request, res: Response): Promise<void> => {
  const id: number = Number(req.params.id)
  const result = findNote({ data: todos, key: id })
  res.status(StatusCodes.OK).json({ msg: `Note with id ${id} finded!`, result })
}

const deleteNote = async (req: Request, res: Response): Promise<void> => {
  const id: number = Number(req.params.id)
  const todo = findNote({ key: id, data: todos })
  todos = deleteOneNote({ data: todos, key: id })
  if (todos.length === 0) {
    res.status(StatusCodes.NO_CONTENT)
    return
  }
  stat.deleted = computeDeletedQuontity(stat.deleted)
  res.status(StatusCodes.OK).json({ msg: `Note with id ${id} successfully deleted!`, result: todo })
}

const createNote = async (req: Request, res: Response): Promise<void> => {
  const { category, content, name } = req.body
  todos = createOneNote({ category, content, name, data: todos })
  stat.created = computeAddedQuontity(stat.created)
  res.status(StatusCodes.OK).json({ msg: 'Note successfully created' })
}

const editNote = async (req: Request, res: Response): Promise<void> => {
  const id: number = Number(req.params.id)
  const { category, archived, content, name }: newData = req.body
  todos = editOneNote({ data: todos, key: id, newData: { archived, content, category, name } })
  const result = findNote({ key: id, data: todos })
  res.status(StatusCodes.OK).json({ msg: `Note with id ${id} successfully edited!`, result })
}

const getStats = async (req: Request, res: Response): Promise<void> => {
  stat.summary = computeSummary(todos)
  stat.mostFrequentCategory = computeMostFrequent(todos)
  stat.generalAmount = todos.length

  res.status(StatusCodes.OK).json({ msg: 'agregated stat', result: stat })
}

export { getNotes, getNote, deleteNote, createNote, editNote, getStats }
