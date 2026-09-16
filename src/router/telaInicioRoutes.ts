import { Router } from 'express'

const telaInicioRouter = Router()

telaInicioRouter.get('/', (req, res) => {
  res.json({ message: 'Tela inicial ok' })
})

export default telaInicioRouter
