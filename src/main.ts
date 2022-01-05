import dotenv from 'dotenv'
import { mongoose } from '@typegoose/typegoose'

import app from './app'

dotenv.config()

const bootstrap = async (): Promise<void> => {
  const { PORT, BD_URL } = process.env

  await mongoose.connect(
    BD_URL
  )

  app.listen(PORT, () => console.log(`listem on ${PORT}`))
}

process.on('uncaughtException', (error) => {
  console.error(error)
  process.exit(1)
})

bootstrap()
