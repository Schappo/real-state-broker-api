import dotenv from 'dotenv'
import express, { Application, Handler, Router } from 'express'
import { connect } from 'mongoose'
import { controllers } from './modules/controllers'
import { MetadataKeysEnum } from './shared/enums'
import { IRouter } from './shared/interfaces'
dotenv.config()
class App {
  private readonly _instance: Application;

  get instance (): Application {
    return this._instance
  }

  constructor () {
    this._instance = express()
    this.databaseStart()
    this._instance.use(express.json())
    // this._instance.use(this.enableCORS)
    this.registerRouters()
  }

  async databaseStart () {
    const { BD_URL } = process.env
    try {
      await connect(
        BD_URL, (err) => {
          if (err) throw err
          console.log('Mongo Started!')
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  private registerRouters () {
    this._instance.get('/', (req, res) => {
      res.json({ message: 'Hello World!' })
    })

    const info: Array<{ api: string, handler: string }> = []

    controllers.forEach((ControllerClass) => {
      const controllersInstance: {[handleName: string]: Handler} = new ControllerClass() as any

      const basePath: string = Reflect.getMetadata(MetadataKeysEnum.BASE_PATH, ControllerClass)
      const routers: IRouter[] = Reflect.getMetadata(MetadataKeysEnum.ROUTERS, ControllerClass)

      const expressRouter = Router()

      routers.forEach(({ method, path, handlerName }) => {
        expressRouter[method](path, controllersInstance[String(handlerName)].bind(controllersInstance))

        info.push({
          api: `${method.toLocaleUpperCase()} ${basePath + path}`,
          handler: `${ControllerClass.name}.${String(handlerName)}`
        })
      })
      this._instance.use(basePath, expressRouter)
    })
  }
}
export default new App().instance
