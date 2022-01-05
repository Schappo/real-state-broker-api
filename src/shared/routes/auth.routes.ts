import express, { Request, Response } from 'express'
import { AuthenticationController } from '../../modules/authentication/controller'

const router = express.Router()

const authController = new AuthenticationController()

function extractBody (req: Request) {
  return req.body
}

// function extractParams (req: Request) {
//   return req.params
// }

router.post('/login', async (req: Request, resp: Response) => {
  try {
    const body = extractBody(req)
    const login = await authController.login(body)
    return resp.json(login)
  } catch (error) {
    return resp.json(error.toResponseError())
  }
})

export default router
