import app from './app'

const { PORT } = process.env

const bootstrap = async (): Promise<void> => {
  try {
    app.listen(
      PORT, () => console.log(`App linstening on port ${PORT}`)
    )
  } catch (error) {

  }
}

process.on('uncaughtException', (error) => {
  console.error(error)
  process.exit(1)
})

bootstrap()
