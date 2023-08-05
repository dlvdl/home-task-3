import express, { Express } from 'express'
import dotenv from 'dotenv'
import { router as notesRouter } from './routes/notes.js'
import { notFoundMiddleware } from './middleware/notFound.js'
dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(express.json())

app.use('/api/v1/notes', notesRouter)
app.use(notFoundMiddleware)

const start = (): void => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
