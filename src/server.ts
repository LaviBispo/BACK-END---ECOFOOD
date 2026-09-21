import express from 'express'
import userRouter from "./router/userRoutes"
import produtoRouter from "./router/produtoRoutes"
import telaInicioRouter from "./router/telaInicioRoutes"
import impactoRouter from "./router/impactoRoutes"

const app = express()

app.use(express.json())
app.use("/api/user", userRouter)
app.use("/api/produto", produtoRouter)
app.use("/api/telaInicio", telaInicioRouter)
app.use("/api/impacto", impactoRouter)


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})