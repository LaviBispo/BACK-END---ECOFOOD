import express from 'express'
import userRouter from "./router/userRoutes"
import produtoRouter from "./router/produtoRoutes"
import telaInicioRouter from "./router/telaInicioRoutes"

const app = express()

app.use(express.json())
app.use("/api/user", userRouter)
app.use("/api/produto", produtoRouter)
app.use("/api/telaInicio", telaInicioRouter)


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})