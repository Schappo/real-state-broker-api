import express, { Request, Response } from 'express'
import { UserController } from '../../modules/user/controller'

const router = express.Router()

const userController = new UserController()

function extractBody (req: Request) {
  return req.body
}

function extractParams (req: Request) {
  return req.params
}

router.post('/', async (req: Request, resp: Response) => {
  try {
    const body = extractBody(req)
    const createdUser = await userController.create(body)
    return resp.json(createdUser)
  } catch (error) {
    return resp.json(error.toResponseError())
  }
})

router.get('/', async (req: Request, resp: Response) => {
  try {
    const users = await userController.findAll()
    return resp.json(users)
  } catch (error) {
    return resp.json(error.toResponseError())
  }
})

router.get('/:id', async (req: Request, resp: Response) => {
  try {
    const params = extractParams(req)

    const users = await userController.findOne(params.id)
    return resp.json(users)
  } catch (error) {
    return resp.json(error.toResponseError())
  }
})

router.delete('/:id', async (req: Request, resp: Response) => {
  try {
    // const params = extractParams(req)
    const users = await userController.findAll()
    return resp.json(users)
  } catch (error) {
    return resp.json(error.toResponseError())
  }
})

export default router
